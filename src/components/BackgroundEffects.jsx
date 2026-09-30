import { useEffect, useState, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * MERN Stack & Live Coding Environment Background
 * 
 * Features:
 * - Real MERN Code snippets (Express, Mongoose, Node.js, React, REST API, Auth)
 * - Live typing simulation in background IDE panel with blinking cursor
 * - Slow vertical scrolling code streams & gentle floating elements
 * - Deep navy / charcoal / dark blue-gray base with cyan, blue & purple developer accents
 * - 3-depth layer system with Framer Motion spring parallax
 * - Central contrast shield to guarantee hero text & profile photo 100% readability
 * - Responsive density (optimized for mobile/tablet) and reduced-motion support
 */

// Typing simulation snippet for the background code window
const TYPING_CODE_LINES = [
  'app.get("/api/projects", async (req, res) => {',
  '  const projects = await Project.find();',
  '  res.json(projects);',
  '});',
];

function BackgroundEffects() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [typedChars, setTypedChars] = useState(0);

  // Smooth spring-based mouse parallax coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 32, stiffness: 55 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transforms for each depth layer
  const orbX = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const orbY = useTransform(smoothMouseY, [-1, 1], [-25, 25]);

  const bgLayerX = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const bgLayerY = useTransform(smoothMouseY, [-1, 1], [-12, 12]);

  const midLayerX = useTransform(smoothMouseX, [-1, 1], [-24, 24]);
  const midLayerY = useTransform(smoothMouseY, [-1, 1], [-24, 24]);

  const fgLayerX = useTransform(smoothMouseX, [-1, 1], [-36, 36]);
  const fgLayerY = useTransform(smoothMouseY, [-1, 1], [-36, 36]);

  // Handle reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Mouse move listener for smooth parallax
  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReducedMotion, mouseX, mouseY]);

  // Subtle background typing animation cycle
  useEffect(() => {
    if (isReducedMotion) return;

    const fullLength = TYPING_CODE_LINES.join("\n").length;
    const interval = setInterval(() => {
      setTypedChars((prev) => (prev >= fullLength + 20 ? 0 : prev + 1));
    }, 110);

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  // Format the typed code text
  const getRenderedTypedCode = () => {
    const fullText = TYPING_CODE_LINES.join("\n");
    return fullText.slice(0, Math.min(typedChars, fullText.length));
  };

  return (
    <div className="ambient-background mern-coding-background" aria-hidden="true">
      {/* ------------------------------------------------------------------
          1. DEEP NAVY/CHARCOAL ATMOSPHERE: Ambient Developer Glows
          ------------------------------------------------------------------ */}
      <motion.div
        className="glow-orb orb-primary-mern"
        style={isReducedMotion ? undefined : { x: orbX, y: orbY }}
      />
      <motion.div
        className="glow-orb orb-secondary-mern"
        style={isReducedMotion ? undefined : { x: orbX, y: orbY }}
      />
      <motion.div
        className="glow-orb orb-tertiary-mern"
        style={isReducedMotion ? undefined : { x: orbX, y: orbY }}
      />
      <motion.div
        className="glow-orb orb-cyan-accent"
        style={isReducedMotion ? undefined : { x: orbX, y: orbY }}
      />

      {/* ------------------------------------------------------------------
          2. CODE EDITOR STRUCTURE: Grid Matrix & Indent Guides
          ------------------------------------------------------------------ */}
      <div className="code-editor-grid" />
      <div className="editor-line-guides" />

      {/* ------------------------------------------------------------------
          3. VERTICAL CODE STREAMS: Upward-Scrolling MERN Code Streams
          ------------------------------------------------------------------ */}
      <div className="code-streams-wrapper">
        {/* Left Upward Stream */}
        <div className="code-stream stream-left">
          <div className="stream-inner">
            <span className="stream-line"><span className="token-kw">import</span> express <span className="token-kw">from</span> <span className="token-str">"express"</span>;</span>
            <span className="stream-line"><span className="token-kw">const</span> app = <span className="token-fn">express</span>();</span>
            <span className="stream-line">app.<span className="token-fn">use</span>(express.<span className="token-fn">json</span>());</span>
            <span className="stream-line"><span className="token-kw">await</span> mongoose.<span className="token-fn">connect</span>(MONGO_URI);</span>
            <span className="stream-line"><span className="token-kw">const</span> user = <span className="token-kw">await</span> User.<span className="token-fn">findOne</span>(&#123; email &#125;);</span>
            <span className="stream-line"><span className="token-kw">const</span> token = jwt.<span className="token-fn">sign</span>(payload, secret);</span>
            <span className="stream-line">router.<span className="token-fn">get</span>(<span className="token-str">"/api/skills"</span>, getSkills);</span>
            <span className="stream-line"><span className="token-kw">export default</span> router;</span>
            <span className="stream-line"><span className="token-cm">// Duplicate for infinite scroll loop</span></span>
            <span className="stream-line"><span className="token-kw">import</span> express <span className="token-kw">from</span> <span className="token-str">"express"</span>;</span>
            <span className="stream-line"><span className="token-kw">const</span> app = <span className="token-fn">express</span>();</span>
            <span className="stream-line">app.<span className="token-fn">use</span>(express.<span className="token-fn">json</span>());</span>
            <span className="stream-line"><span className="token-kw">await</span> mongoose.<span className="token-fn">connect</span>(MONGO_URI);</span>
            <span className="stream-line"><span className="token-kw">const</span> user = <span className="token-kw">await</span> User.<span className="token-fn">findOne</span>(&#123; email &#125;);</span>
            <span className="stream-line"><span className="token-kw">const</span> token = jwt.<span className="token-fn">sign</span>(payload, secret);</span>
            <span className="stream-line">router.<span className="token-fn">get</span>(<span className="token-str">"/api/skills"</span>, getSkills);</span>
            <span className="stream-line"><span className="token-kw">export default</span> router;</span>
          </div>
        </div>

        <div className="code-stream stream-mid-left">
          <div className="stream-inner stream-inner-delayed">
            <span className="stream-line"><span className="token-kw">useEffect</span>(() =&gt; fetchProjects(), []);</span>
            <span className="stream-line"><span className="token-kw">return</span> &lt;<span className="token-tag">SkillGrid</span> items=&#123;skills&#125; /&gt;;</span>
            <span className="stream-line">axios.<span className="token-fn">get</span>(<span className="token-str">"/api/education"</span>);</span>
            <span className="stream-line"><span className="token-kw">const</span> schema = <span className="token-kw">new</span> mongoose.<span className="token-fn">Schema</span>(&#123; title: String &#125;);</span>
            <span className="stream-line">app.<span className="token-fn">post</span>(<span className="token-str">"/api/contact"</span>, sendMail);</span>
            <span className="stream-line"><span className="token-kw">export</span> <span className="token-kw">const</span> PORT = process.env.PORT;</span>
            <span className="stream-line"><span className="token-cm">// Duplicate for infinite scroll loop</span></span>
            <span className="stream-line"><span className="token-kw">useEffect</span>(() =&gt; fetchProjects(), []);</span>
            <span className="stream-line"><span className="token-kw">return</span> &lt;<span className="token-tag">SkillGrid</span> items=&#123;skills&#125; /&gt;;</span>
            <span className="stream-line">axios.<span className="token-fn">get</span>(<span className="token-str">"/api/education"</span>);</span>
            <span className="stream-line"><span className="token-kw">const</span> schema = <span className="token-kw">new</span> mongoose.<span className="token-fn">Schema</span>(&#123; title: String &#125;);</span>
            <span className="stream-line">app.<span className="token-fn">post</span>(<span className="token-str">"/api/contact"</span>, sendMail);</span>
            <span className="stream-line"><span className="token-kw">export</span> <span className="token-kw">const</span> PORT = process.env.PORT;</span>
          </div>
        </div>

        <div className="code-stream stream-mid-right">
          <div className="stream-inner">
            <span className="stream-line">&lt;<span className="token-tag">motion.div</span> <span className="token-attr">animate</span>=&#123;&#123; y: 0 &#125;&#125; /&gt;</span>
            <span className="stream-line"><span className="token-kw">npm</span> <span className="token-fn">run</span> <span className="token-str">dev</span></span>
            <span className="stream-line">git <span className="token-fn">commit</span> -m <span className="token-str">"feat: portfolio"</span></span>
            <span className="stream-line"><span className="token-kw">const</span> hash = bcrypt.<span className="token-fn">hash</span>(password);</span>
            <span className="stream-line">res.<span className="token-fn">cookie</span>(<span className="token-str">"token"</span>, jwtToken);</span>
            <span className="stream-line"><span className="token-kw">export default</span> <span className="token-fn">Skills</span>;</span>
            <span className="stream-line"><span className="token-cm">// Duplicate for infinite scroll loop</span></span>
            <span className="stream-line">&lt;<span className="token-tag">motion.div</span> <span className="token-attr">animate</span>=&#123;&#123; y: 0 &#125;&#125; /&gt;</span>
            <span className="stream-line"><span className="token-kw">npm</span> <span className="token-fn">run</span> <span className="token-str">dev</span></span>
            <span className="stream-line">git <span className="token-fn">commit</span> -m <span className="token-str">"feat: portfolio"</span></span>
            <span className="stream-line"><span className="token-kw">const</span> hash = bcrypt.<span className="token-fn">hash</span>(password);</span>
            <span className="stream-line">res.<span className="token-fn">cookie</span>(<span className="token-str">"token"</span>, jwtToken);</span>
            <span className="stream-line"><span className="token-kw">export default</span> <span className="token-fn">Skills</span>;</span>
          </div>
        </div>

        {/* Right Upward Stream */}
        <div className="code-stream stream-right">
          <div className="stream-inner stream-inner-delayed">
            <span className="stream-line"><span className="token-kw">function</span> <span className="token-fn">App</span>() &#123; <span className="token-kw">return</span> &lt;<span className="token-tag">Portfolio</span> /&gt;; &#125;</span>
            <span className="stream-line"><span className="token-kw">const</span> [projects, setProjects] = <span className="token-fn">useState</span>([]);</span>
            <span className="stream-line">res.<span className="token-fn">status</span>(<span className="token-num">200</span>).<span className="token-fn">json</span>(&#123; success: <span className="token-kw">true</span> &#125;);</span>
            <span className="stream-line">app.<span className="token-fn">listen</span>(<span className="token-num">5000</span>, () =&gt; console.<span className="token-fn">log</span>(<span className="token-str">"Server online"</span>));</span>
            <span className="stream-line"><span className="token-kw">const</span> router = express.<span className="token-fn">Router</span>();</span>
            <span className="stream-line">module.exports = router;</span>
            <span className="stream-line">db.<span className="token-fn">collection</span>(<span className="token-str">'projects'</span>).<span className="token-fn">find</span>();</span>
            <span className="stream-line"><span className="token-kw">const</span> isMERN = <span className="token-kw">true</span>;</span>
            <span className="stream-line"><span className="token-cm">// Duplicate for infinite scroll loop</span></span>
            <span className="stream-line"><span className="token-kw">function</span> <span className="token-fn">App</span>() &#123; <span className="token-kw">return</span> &lt;<span className="token-tag">Portfolio</span> /&gt;; &#125;</span>
            <span className="stream-line"><span className="token-kw">const</span> [projects, setProjects] = <span className="token-fn">useState</span>([]);</span>
            <span className="stream-line">res.<span className="token-fn">status</span>(<span className="token-num">200</span>).<span className="token-fn">json</span>(&#123; success: <span className="token-kw">true</span> &#125;);</span>
            <span className="stream-line">app.<span className="token-fn">listen</span>(<span className="token-num">5000</span>, () =&gt; console.<span className="token-fn">log</span>(<span className="token-str">"Server online"</span>));</span>
            <span className="stream-line"><span className="token-kw">const</span> router = express.<span className="token-fn">Router</span>();</span>
            <span className="stream-line">module.exports = router;</span>
            <span className="stream-line">db.<span className="token-fn">collection</span>(<span className="token-str">'projects'</span>).<span className="token-fn">find</span>();</span>
            <span className="stream-line"><span className="token-kw">const</span> isMERN = <span className="token-kw">true</span>;</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------
          4. DEPTH LAYER 1 (BACKGROUND): Blurred Realistic Code Panels
          ------------------------------------------------------------------ */}
      <motion.div
        className="code-layer code-layer-bg"
        style={isReducedMotion ? undefined : { x: bgLayerX, y: bgLayerY }}
      >
        {/* Full MERN Backend Server Window (Top-Left) */}
        <div className="code-editor-window window-server code-float-slow-1">
          <div className="window-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="window-title">server.js — Node/Express</span>
          </div>
          <pre className="code-window-pre">
            <code>
              <span className="token-kw">import</span> express <span className="token-kw">from</span> <span className="token-str">"express"</span>;{"\n"}
              <span className="token-kw">import</span> mongoose <span className="token-kw">from</span> <span className="token-str">"mongoose"</span>;{"\n\n"}
              <span className="token-kw">const</span> app = <span className="token-fn">express</span>();{"\n"}
              app.<span className="token-fn">use</span>(express.<span className="token-fn">json</span>());{"\n\n"}
              mongoose.<span className="token-fn">connect</span>(MONGO_URI);{"\n\n"}
              app.<span className="token-fn">get</span>(<span className="token-str">"/api/projects"</span>, <span className="token-kw">async</span> (req, res) =&gt; &#123;{"\n"}
              {"  "}<span className="token-kw">const</span> projects = <span className="token-kw">await</span> Project.<span className="token-fn">find</span>();{"\n"}
              {"  "}res.<span className="token-fn">json</span>(projects);{"\n"}
              &#125;);{"\n\n"}
              <span className="token-kw">const</span> PORT = <span className="token-num">5000</span>;{"\n"}
              app.<span className="token-fn">listen</span>(PORT, () =&gt; &#123;{"\n"}
              {"  "}console.<span className="token-fn">log</span>(<span className="token-str">"Server running..."</span>);{"\n"}
              &#125;);
            </code>
          </pre>
        </div>

        {/* Live Typing Active IDE Window (Bottom-Right) */}
        <div className="code-editor-window window-routes code-float-slow-2 code-snippet-tablet-hide">
          <div className="window-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="window-title">projectRoutes.js — REST API</span>
          </div>
          <pre className="code-window-pre">
            <code>
              <span className="token-kw">const</span> router = express.<span className="token-fn">Router</span>();{"\n\n"}
              {getRenderedTypedCode()}
              <span className="typing-cursor">|</span>{"\n\n"}
              <span className="token-kw">module.exports</span> = router;
            </code>
          </pre>
        </div>

        {/* Background Large Developer Ambient Symbols */}
        <span className="code-symbol-ambient symbol-bracket-1 code-float-drift-1">&#123; &#125;</span>
        <span className="code-symbol-ambient symbol-jsx-tag code-float-drift-2">&lt;Portfolio /&gt;</span>
        <span className="code-symbol-ambient symbol-arrow code-float-drift-3">=&gt;</span>
        <span className="code-symbol-ambient symbol-mern-bg code-float-drift-4">MERN</span>
      </motion.div>

      {/* ------------------------------------------------------------------
          5. DEPTH LAYER 2 (MIDDLE): Medium Code Snippets & Terminal Commands
          ------------------------------------------------------------------ */}
      <motion.div
        className="code-layer code-layer-mid"
        style={isReducedMotion ? undefined : { x: midLayerX, y: midLayerY }}
      >
        {/* Router & Express Definition */}
        <div className="code-pill snippet-express-init code-float-mid-1">
          <code>
            <span className="token-kw">const</span> app = <span className="token-fn">express</span>(); <span className="token-kw">const</span> router = express.<span className="token-fn">Router</span>();
          </code>
        </div>

        {/* Mongoose Connect */}
        <div className="code-pill snippet-mongoose code-float-mid-2">
          <code>
            <span className="token-kw">await</span> mongoose.<span className="token-fn">connect</span>(MONGO_URI);
          </code>
        </div>

        {/* User Auth & JWT Token */}
        <div className="code-pill snippet-jwt code-float-mid-3 code-snippet-mobile-hide">
          <code>
            <span className="token-kw">const</span> user = <span className="token-kw">await</span> User.<span className="token-fn">findOne</span>(); <span className="token-kw">const</span> token = jwt.<span className="token-fn">sign</span>(payload, secret);
          </code>
        </div>

        {/* React App Component */}
        <div className="code-pill snippet-react-app code-float-mid-4">
          <code>
            <span className="token-kw">function</span> <span className="token-fn">App</span>() &#123; <span className="token-kw">return</span> &lt;<span className="token-tag">Portfolio</span> /&gt;; &#125;
          </code>
        </div>

        {/* Terminal Run Dev */}
        <div className="code-pill terminal-pill snippet-npm-run code-float-mid-5">
          <span className="terminal-prompt">$</span>
          <code>
            <span className="token-cmd">npm run dev</span>
            <span className="terminal-cursor">_</span>
          </code>
        </div>

        {/* Git Branch & Commit */}
        <div className="code-pill terminal-pill snippet-git code-float-mid-6 code-snippet-mobile-hide">
          <span className="terminal-branch">git:(main)</span>
          <code>commit -m <span className="token-str">"feat: full stack MERN architecture"</span></code>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------------
          6. DEPTH LAYER 3 (FOREGROUND): Crisp MERN Stack Badges & Labels
          ------------------------------------------------------------------ */}
      <motion.div
        className="code-layer code-layer-fg"
        style={isReducedMotion ? undefined : { x: fgLayerX, y: fgLayerY }}
      >
        {/* Core MERN Stack Badges */}
        <div className="tech-code-token token-mern-badge code-float-fg-1">
          <span className="token-syntax-dot dot-mern" />
          <span>MERN</span>
        </div>

        <div className="tech-code-token token-react code-float-fg-2">
          <span className="token-syntax-dot dot-react" />
          <span>React</span>
        </div>

        <div className="tech-code-token token-node code-float-fg-3">
          <span className="token-syntax-dot dot-node" />
          <span>Node.js</span>
        </div>

        <div className="tech-code-token token-express code-float-fg-4 code-snippet-mobile-hide">
          <span className="token-syntax-dot dot-express" />
          <span>Express</span>
        </div>

        <div className="tech-code-token token-mongo code-float-fg-5 code-snippet-mobile-hide">
          <span className="token-syntax-dot dot-mongo" />
          <span>MongoDB</span>
        </div>

        <div className="tech-code-token token-js code-float-fg-6">
          <span className="token-syntax-dot dot-js" />
          <span>JavaScript</span>
        </div>

        <div className="tech-code-token token-rest code-float-fg-7 code-snippet-mobile-hide">
          <span className="token-syntax-dot dot-rest" />
          <span>REST API</span>
        </div>

        {/* Micro Operator & Git Badges */}
        <div className="micro-code-token token-git-badge code-float-fg-8 code-snippet-mobile-hide">Git / GitHub</div>
        <div className="micro-code-token token-arrow-fg code-float-fg-9">=&gt;</div>
        <div className="micro-code-token token-brackets-fg code-float-fg-10">&#123; &#125;</div>
        <div className="micro-code-token token-fragment-fg code-float-fg-11">&lt;/&gt;</div>
      </motion.div>

      {/* ------------------------------------------------------------------
          7. HERO & CONTENT CONTRAST SHIELDS (Guarantees 100% Readability)
          ------------------------------------------------------------------ */}
      <div className="code-bg-center-mask" />
      <div className="ambient-vignette" />
    </div>
  );
}

export default memo(BackgroundEffects);
