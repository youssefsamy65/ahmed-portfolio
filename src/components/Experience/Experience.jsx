import { useInView } from "../../hooks/useInView";
import { EXPERIENCES, COLORS } from "../../data/constants";

function TimelineItem({ exp, index, inView }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 32,
        marginBottom: 56,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(30px)",
        transition: `all 0.7s ease ${index * 0.18}s`,
      }}
    >
      {/* Dot */}
      <div style={{ paddingTop: 6, position: "relative", zIndex: 1 }}>
        <div className="timeline-dot" />
      </div>

      {/* Card */}
      <div
        className="glass"
        style={{ flex: 1, padding: "28px 32px", borderRadius: 16 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: COLORS.pearl,
              }}
            >
              {exp.company}
            </p>
            <p
              style={{
                fontSize: 12,
                color: COLORS.gray,
                fontStyle: "italic",
                marginTop: 2,
              }}
            >
              {exp.sub}
            </p>
          </div>

          <span
            style={{
              fontSize: 12,
              color: COLORS.gold,
              background: "rgba(201,168,76,0.1)",
              padding: "4px 14px",
              borderRadius: 20,
              border: "1px solid rgba(201,168,76,0.25)",
              whiteSpace: "nowrap",
            }}
          >
            {exp.period}
          </span>
        </div>

        <p
          style={{
            color: COLORS.pearl,
            fontSize: 14,
            lineHeight: 1.85,
          }}
        >
          {exp.description}
        </p>

        <p
          style={{
            color: COLORS.gray,
            fontSize: 13,
            lineHeight: 1.75,
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          {exp.subDesc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "120px 2rem", background: COLORS.navyMid }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              color: COLORS.gold,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Berufserfahrung · Experience
          </p>

          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300 }}
          >
            Mein{" "}
            <span style={{ color: COLORS.gold }}>Werdegang</span>
          </h2>

          <div className="section-divider section-divider--center" />

          <p
            style={{
              color: COLORS.gray,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            A journey through clinical and digital dental environments.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(${COLORS.gold}, transparent)`,
              opacity: 0.3,
            }}
          />

          {EXPERIENCES.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              exp={exp}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
