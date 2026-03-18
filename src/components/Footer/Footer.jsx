import { useState } from "react";
import { NAV_LINKS, COLORS } from "../../data/constants";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: COLORS.navy,
        borderTop: "1px solid rgba(201,168,76,0.1)",
        padding: "40px 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          className="font-display"
          style={{
            fontSize: 20,
            color: COLORS.gold,
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          Ahmed Jahin
        </a>

        {/* Tagline */}
        <p style={{ color: COLORS.gray, fontSize: 13 }}>
          Dental CAD Designer · Exocad Specialist · {year}
        </p>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: hoveredLink === link.href ? COLORS.gold : COLORS.gray,
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.3s",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom note */}
      <div
        style={{
          maxWidth: 1200,
          margin: "20px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
        }}
      >
        <p style={{ color: COLORS.gray, fontSize: 12, opacity: 0.6 }}>
          Designed & built with precision — just like every restoration.
        </p>
      </div>
    </footer>
  );
}
