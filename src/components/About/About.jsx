import { useInView } from "../../hooks/useInView";
import { COLORS } from "../../data/constants";

const ABOUT_CARDS = [
  { icon: "🎓", title: "British University in Egypt", sub: "Abschluss 2021" },
  { icon: "🌍", title: "Klinische & Labor-Erfahrung", sub: "Dual background" },
  { icon: "💻", title: "Exocad Expert", sub: "4+ Jahre Erfahrung" },
  { icon: "🔬", title: "CBCT-Analyse", sub: "Digitale Diagnostik" },
];

function EducationCard({ inView }) {
  return (
    <div
      style={{
        flex: "0 0 340px",
        position: "relative",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-40px)",
        transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        style={{
          width: 320,
          height: 420,
          background: `linear-gradient(145deg, #162a52, #0f2040)`,
          borderRadius: 24,
          border: "1px solid rgba(201,168,76,0.2)",
          overflow: "hidden",
          boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
          position: "relative",
          padding: 32,
        }}
      >
        <p
          className="font-display"
          style={{ fontSize: 48, color: COLORS.gold, lineHeight: 1 }}
        >
          BUE
        </p>
        <p
          style={{
            fontSize: 12,
            color: COLORS.gray,
            marginTop: 6,
            letterSpacing: "0.1em",
          }}
        >
          British University in Egypt
        </p>

        <div
          style={{
            width: 40,
            height: 1,
            background: COLORS.gold,
            margin: "24px 0",
          }}
        />

        <p
          className="font-display"
          style={{
            fontSize: 72,
            color: "rgba(201,168,76,0.15)",
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          2021
        </p>

        <p
          style={{
            color: COLORS.pearl,
            fontSize: 14,
            marginTop: 24,
            lineHeight: 1.8,
          }}
        >
          Zahnmedizinstudium mit Fokus auf digitale Prothetik und klinische
          Anwendung.
        </p>
        <p
          style={{
            color: COLORS.gray,
            fontSize: 12,
            marginTop: 8,
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Dental degree with focus on digital prosthetics and clinical practice.
        </p>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${COLORS.gold}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 2rem", background: COLORS.navyMid }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 80,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <EducationCard inView={inView} />

        {/* Right — text content */}
        <div
          style={{
            flex: "1 1 320px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s",
          }}
        >
          <p
            style={{
              color: COLORS.gold,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Über mich · About Me
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(38px, 5vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Digitale Präzision
            <br />
            <span style={{ color: COLORS.gold }}>trifft Ästhetik</span>
          </h2>

          <div className="section-divider" />

          <p
            style={{
              color: COLORS.pearl,
              fontSize: 15,
              lineHeight: 1.9,
              marginBottom: 16,
            }}
          >
            Als Zahnarzt und Exocad-Spezialist verbinde ich klinisches Wissen
            mit technischer Präzision in der CAD/CAM-Fertigung. Mit über 4
            Jahren Erfahrung in der digitalen Zahntechnik bin ich auf komplexe
            Vollbogenversorgungen und implantatgetragene Restaurationen
            spezialisiert.
          </p>

          <p
            style={{
              color: COLORS.gray,
              fontSize: 13,
              lineHeight: 1.8,
              marginBottom: 36,
              fontStyle: "italic",
            }}
          >
            As a dentist and Exocad specialist, I merge clinical knowledge with
            technical precision in CAD/CAM fabrication — experienced in
            full-arch restorations, implant work, DSD, digital impressions, and
            CBCT analysis.
          </p>

          {/* Info grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {ABOUT_CARDS.map(({ icon, title, sub }) => (
              <div
                key={title}
                className="glass"
                style={{ padding: "16px 20px", borderRadius: 10 }}
              >
                <p style={{ fontSize: 22, marginBottom: 6 }}>{icon}</p>
                <p
                  style={{
                    fontSize: 14,
                    color: COLORS.pearl,
                    fontWeight: 500,
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: 12, color: COLORS.gray, marginTop: 3 }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
