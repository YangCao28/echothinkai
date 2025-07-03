import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Service" },
  { path: "/contact", label: "Contact Us" },
];

export default function PageLayout({ children }) {
  const location = useLocation();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
          factor: 80,
        },
      },
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: { min: 0.2, max: 0.6 }, animation: { enable: true, speed: 1.5, sync: false } },
      size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 5, minimumValue: 0.5, sync: false } },
      links: { enable: true, distance: 120, color: "#66ccff", opacity: 0.15, width: 1 },
      move: { enable: true, speed: 0.6, direction: "none", random: true, straight: false, outModes: { default: "out" } },
    },
    detectRetina: true,
  };

  return (
    <div className="page-layout">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="background-particles"
      />

      {/* 主体内容 */}
      <main className="page-content">{children}</main>

      {/* 底部导航 */}
      <nav className="bottom-nav" aria-label="Primary">
        <ul>
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                aria-current={location.pathname === path ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 底部版权加 Logo */}
      <footer className="page-footer">
        <div className="footer-content">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <span>&copy; 2025 EchoThink.ai</span>
        </div>
      </footer>

      <style>{`
        .page-layout {
          position: relative;
          min-height: 100vh;
          background-color: #000;
          color: #fff;
          font-family: 'Josefin Sans', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 1rem 1.5rem 6rem;
        }

        .background-particles {
          position: fixed !important;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }

        .page-content {
          position: relative;
          z-index: 10;
          max-width: 720px;
          width: 100%;
          flex-grow: 1;
          margin: 0 auto;
          color: #ccc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(100vh - 5rem - 2rem);
        }

        .bottom-nav {
          position: fixed;
          bottom: 2.5rem;
          left: 0;
          width: 100%;
          background: rgba(0,0,0,0.85);
          backdrop-filter: saturate(180%) blur(10px);
          z-index: 50;
          border-top: 1px solid #222;
          user-select: none;
        }

        .bottom-nav ul {
          margin: 0;
          padding: 0.75rem 1.5rem;
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 2.5rem;
        }

        .bottom-nav a {
          color: #ccc;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }

        .bottom-nav a:hover,
        .bottom-nav a.active {
          color: #87b9e8;
          border-bottom: 2px solid #87b9e8;
        }

        .page-footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 0.5rem 1.5rem;
          background: rgba(0,0,0,0.85);
          backdrop-filter: saturate(180%) blur(10px);
          color: #666;
          font-size: 0.875rem;
          z-index: 50;
          user-select: none;
          text-align: center;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
      .footer-logo {
        max-height: 2.2rem;        /* 相对单位，更灵活 */
        height: auto;
        width: auto;
        max-width: 8rem;           /* 限制太宽的情况 */
        object-fit: contain;
        display: block;
        filter: brightness(1.1) drop-shadow(0 0 2px rgba(255, 255, 255, 0.1));
      }
      `}</style>
    </div>
  );
}
