import { useInView } from "../../hooks/useInView";
import { SKILLS, COLORS } from "../../data/constants";

function SkillCard({ skill, index, inView }) {
  return (
    <div
      className="glass"
      style={{
        padding: "28px 28px 24px",
        borderRadius: 16,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 14 }}>{skill.icon}</div>

      <p
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: COLORS.pearl,
          marginBottom: 2,
        }}
      >
        {skill.title}
      </p>

      <p
        style={{
          fontSize: 12,
          color: COLORS.gray,
          marginBottom: 18,
          fontStyle: "italic",
        }}
      >
        {skill.sub}
      </p>

      {/* Level label row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: COLORS.gray,
            letterSpacing: "0.05em",
          }}
        >
          Kompetenz
        </span>
        <span
          style={{ fontSize: 13, color: COLORS.gold, fontWeight: 600 }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "120px 2rem", background: COLORS.navy }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            Fähigkeiten · Skills
          </p>

          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300 }}
          >
            Technische{" "}
            <span style={{ color: COLORS.gold }}>Expertise</span>
          </h2>

          <div className="section-divider section-divider--center" />

          <p
            style={{
              color: COLORS.gray,
              fontSize: 14,
              marginTop: 8,
              fontStyle: "italic",
            }}
          >
            Technical expertise built through years of hands-on dental CAD work.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
