import { COLORS, STATS } from "../../data/constants";

function DotGrid() {
  return (
    <div style={{ position: "absolute", right: 80, top: 120, opacity: 0.12 }}>
      {[...Array(6)].map((_, row) => (
        <div key={row} style={{ display: "flex", gap: 14, marginBottom: 14 }}>
          {[...Array(8)].map((_, col) => (
            <div
              key={col}
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: COLORS.gold,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function StatBadge({ number, label }) {
  return (
    <div>
      <p
        className="font-display"
        style={{
          fontSize: 36,
          color: COLORS.gold,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {number}
      </p>
      <p
        style={{
          fontSize: 12,
          color: COLORS.gray,
          marginTop: 4,
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function PhotoCard() {
  return (
    <div
      className="float-anim fade-in"
      style={{ flex: "0 0 320px", position: "relative", animationDelay: "0.5s" }}
    >
      <div
        style={{
          width: 300,
          height: 380,
          background: `linear-gradient(145deg, ${COLORS.navyLight}, ${COLORS.navyMid})`,
          borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
          border: `1px solid rgba(201,168,76,0.25)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,168,76,0.1)",
        }}
      >
        {/*
          ─────────────────────────────────────────────────
          REPLACE THE src BELOW WITH YOUR ACTUAL IMAGE PATH
          Example: src="/assets/ahmed-jahin.jpg"
          or:       src={require("../../assets/ahmed-jahin.jpg")}
          ─────────────────────────────────────────────────
        */}
        <img
          src="/assets/ahmed-photo.jpg"
          alt="Ahmed Jahin"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.style.display = "none";
            document.getElementById("photo-fallback").style.display = "flex";
          }}
        />

        {/* Fallback shown if image fails to load */}
        <div
          id="photo-fallback"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 8 }}>🦷</div>
          <p
            className="font-display"
            style={{ color: COLORS.gold, fontSize: 16, letterSpacing: "0.1em" }}
          >
            Dr. Ahmed Jahin
          </p>
          <p style={{ color: COLORS.gray, fontSize: 12, marginTop: 4 }}>
            Foto hier einfügen
          </p>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="glass"
        style={{
          position: "absolute",
          bottom: 20,
          left: -24,
          padding: "10px 18px",
          borderRadius: 10,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <p style={{ fontSize: 11, color: COLORS.gold, letterSpacing: "0.1em" }}>
          ⭐ Exocad Certified
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 70% 50%, rgba(22,42,82,0.7) 0%, #0a1628 70%)`,
        paddingTop: 80,
      }}
    >
      {/* Decorative rings */}
      <div
        className="hero-ring"
        style={{ width: 500, height: 500, top: "50%", right: -150, marginTop: -250 }}
      />
      <div
        className="hero-ring"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          right: -250,
          marginTop: -350,
          animationDirection: "reverse",
          animationDuration: "30s",
        }}
      />

      <DotGrid />

      <div
        className="hero-content"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        {/* ── Left: Text ── */}
        <div style={{ maxWidth: 600, flex: "1 1 320px" }}>
          <p
            className="fade-up"
            style={{
              color: COLORS.gold,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
              animationDelay: "0.1s",
            }}
          >
            Dental CAD Designer · Exocad Spezialist
          </p>

          <h1
            className="font-display fade-up"
            style={{
              fontSize: "clamp(52px, 7vw, 90px)",
              lineHeight: 1.05,
              marginBottom: 24,
              animationDelay: "0.25s",
              fontWeight: 300,
            }}
          >
            Ahmed
            <br />
            <span className="gold-shimmer" style={{ fontWeight: 600 }}>
              Jahin
            </span>
          </h1>

          <p
            className="fade-up"
            style={{
              color: COLORS.pearl,
              fontSize: 16,
              lineHeight: 1.85,
              marginBottom: 16,
              animationDelay: "0.4s",
              maxWidth: 500,
            }}
          >
            Zahnarzt und Exocad-Designer mit über 4 Jahren Erfahrung in der
            digitalen Zahntechnik — spezialisiert auf Vollbogenrestaurationen,
            implantatgetragene Versorgungen und Digital Smile Design.
          </p>

          <p
            className="fade-up"
            style={{
              color: COLORS.gray,
              fontSize: 13,
              lineHeight: 1.75,
              marginBottom: 40,
              animationDelay: "0.5s",
              fontStyle: "italic",
            }}
          >
            Dentist & Exocad designer with 4+ years of experience in digital
            dentistry, specializing in full-arch and implant-supported restorations.
          </p>

          <div
            className="fade-up hero-buttons"
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              animationDelay: "0.55s",
            }}
          >
            <a
              href="#portfolio"
              className="btn-gold"
              style={{
                padding: "13px 32px",
                borderRadius: 6,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "inline-block",
              }}
            >
              Portfolio ansehen
            </a>
            <a
              href="#contact"
              className="btn-outline"
              style={{
                padding: "13px 32px",
                borderRadius: 6,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "inline-block",
              }}
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Stats */}
          <div
            className="fade-up hero-stats"
            style={{
              display: "flex",
              gap: 40,
              marginTop: 60,
              animationDelay: "0.7s",
            }}
          >
            {STATS.map((s) => (
              <StatBadge key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <PhotoCard />
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <p
          style={{
            fontSize: 10,
            color: COLORS.gray,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scrollen
        </p>
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(${COLORS.gold}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
