import React from "react";

export default function GPLogo({ size = 36, showText = false, className = "" }) {
  return (
    <div className={`gp-brand-logo ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gp-monogram-svg"
        aria-label="GP Monogram Logo"
      >
        <defs>
          <linearGradient id="gpBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="50%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="gpBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#181824" />
            <stop offset="100%" stopColor="#111118" />
          </linearGradient>
        </defs>

        {/* Squircle Badge Container */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          fill="url(#gpBgGrad)"
          stroke="rgba(217, 70, 239, 0.35)"
          strokeWidth="1.2"
        />

        {/* Geometric GP Monogram Mark */}
        <g id="monogram-gp">
          {/* Letter G - Modern sleek loop */}
          <path
            d="M 19 13 H 13.5 A 6.5 6.5 0 0 0 13.5 27 H 19.5 V 20 H 15.5"
            stroke="url(#gpBrandGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter P - Modern refined upper loop & stem */}
          <path
            d="M 22.5 27 V 13 H 27.5 A 3.8 3.8 0 0 1 27.5 20.6 H 22.5"
            stroke="#F5F5F7"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {showText && (
        <span className="brand-name-text">
          GEETA<span className="brand-name-dot">.</span>
        </span>
      )}
    </div>
  );
}
