import { useEffect, useRef } from "react";

export default function TechBackgroundCanvas({ isVisible = true }) {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Grid config
    const gridSize = isMobile ? 48 : 56;
    let gridOffset = 0;

    // Particles config
    const particleCount = prefersReducedMotion ? 0 : isMobile ? 16 : 38;
    const particles = [];

    const techTokens = [
      "const", "=>", "React", "Node", "REST", "{...}", "01", "</>", "git", "async", "await", "state", "props", "API", "200 OK", "DB"
    ];

    const tokens = [];
    const tokenCount = prefersReducedMotion ? 0 : isMobile ? 6 : 14;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.6 ? "rgba(217, 70, 239, " : "rgba(56, 189, 248, ",
        alpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulse: Math.random() * Math.PI * 2
      });
    }

    for (let i = 0; i < tokenCount; i++) {
      tokens.push({
        text: techTokens[Math.floor(Math.random() * techTokens.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -0.15 - Math.random() * 0.25,
        alpha: Math.random() * 0.28 + 0.12,
        size: Math.floor(Math.random() * 3 + 10)
      });
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let lastTime = performance.now();

    const render = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(6, 7, 10, 0.18)";
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient radial glow centers
      const grad1 = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 0,
        width * 0.2, height * 0.3, width * 0.5
      );
      grad1.addColorStop(0, "rgba(99, 102, 241, 0.06)");
      grad1.addColorStop(1, "rgba(6, 7, 10, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, width * 0.45
      );
      grad2.addColorStop(0, "rgba(217, 70, 239, 0.04)");
      grad2.addColorStop(1, "rgba(6, 7, 10, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle technical grid
      if (!prefersReducedMotion) {
        gridOffset = (gridOffset + delta * 3) % gridSize;
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.022)";

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal moving lines
      for (let y = gridOffset; y <= height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Faint glowing grid intersections (dots)
      ctx.fillStyle = "rgba(56, 189, 248, 0.12)";
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = (gridOffset + gridSize) % (gridSize * 2); y < height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw faint floating tech tokens
      ctx.font = '11px "JetBrains Mono", monospace';
      tokens.forEach((t) => {
        t.y += t.vy;
        if (t.y < -20) {
          t.y = height + 20;
          t.x = Math.random() * width;
          t.text = techTokens[Math.floor(Math.random() * techTokens.length)];
        }
        ctx.fillStyle = `rgba(161, 161, 170, ${t.alpha})`;
        ctx.fillText(t.text, t.x, t.y);
      });

      // Draw particles & subtle connection lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.1;
        ctx.fillStyle = `${p.color}${Math.max(0.05, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle line
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = isMobile ? 70 : 100;

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.08;
            ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (isVisible) {
        animFrameIdRef.current = requestAnimationFrame(render);
      }
    };

    if (isVisible) {
      animFrameIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="tech-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="tech-bg-canvas" />
      <div className="tech-canvas-vignette" />
      <div className="tech-canvas-scanlines" />
    </div>
  );
}
