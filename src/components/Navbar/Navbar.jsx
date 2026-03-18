import { useState, useEffect } from "react";
import { NAV_LINKS, COLORS } from "../../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(10,22,40,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display"
          style={{
            fontSize: 22,
            color: COLORS.gold,
            letterSpacing: "0.05em",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Ahmed Jahin
        </a>

        {/* Desktop Links */}
        <ul
          className="hide-mobile"
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-gold"
              style={{
                padding: "9px 22px",
                borderRadius: 6,
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "inline-block",
              }}
            >
              Zusammenarbeiten
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 24,
                height: 1.5,
                background: COLORS.gold,
                display: "block",
                transition: "transform 0.3s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,22,40,0.98)",
            padding: "1.5rem 2rem",
            borderTop: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: COLORS.pearl,
                padding: "12px 0",
                textDecoration: "none",
                fontSize: 15,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.pearl)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
