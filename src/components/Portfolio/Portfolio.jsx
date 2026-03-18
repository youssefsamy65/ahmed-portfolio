import { useState, useEffect, useCallback } from "react";
import { useInView } from "../../hooks/useInView";
import { PROJECTS, PORTFOLIO_TAGS, COLORS } from "../../data/constants";

/* ─────────────────────────────────────────────
   FilterBar
───────────────────────────────────────────── */
function FilterBar({ activeTag, onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 32,
      }}
    >
      {PORTFOLIO_TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`filter-btn ${activeTag === tag ? "filter-btn--active" : "filter-btn--inactive"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ProjectCard  —  uses imgs[0] as the preview
───────────────────────────────────────────── */
function ProjectCard({ project, index, inView, onClick }) {
  const previewImg = project.imgs[0];
  const photoCount = project.imgs.length;

  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{
        background: COLORS.navyMid,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src={previewImg} alt={project.title} className="project-img" />

        <div className="project-overlay">
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 13,
                color: COLORS.gold,
                marginBottom: 8,
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              ÖFFNEN
            </p>
            <p style={{ fontSize: 14, color: COLORS.pearl, lineHeight: 1.7 }}>
              {project.desc}
            </p>
          </div>
        </div>

        <span className="tag-pill" style={{ position: "absolute", top: 14, right: 14 }}>
          {project.tag}
        </span>

        {photoCount > 1 && (
          <span
            style={{
              position: "absolute",
              bottom: 10,
              left: 14,
              background: "rgba(0,0,0,0.55)",
              color: COLORS.pearl,
              fontSize: 11,
              letterSpacing: "0.05em",
              padding: "3px 9px",
              borderRadius: 20,
            }}
          >
            🖼 {photoCount} Fotos
          </span>
        )}
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: COLORS.pearl,
            marginBottom: 10,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: 13, color: COLORS.gray, lineHeight: 1.75 }}>
          {project.desc}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Lightbox
   outer arrows  → navigate between projects
   inner dots    → navigate between photos
───────────────────────────────────────────── */
function Lightbox({ projects, startIndex, onClose }) {
  const [projectIndex, setProjectIndex] = useState(startIndex);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const project = projects[projectIndex];
  const photos = project.imgs;

  const goProject = useCallback(
    (dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setProjectIndex((prev) =>
          dir === "right"
            ? (prev + 1) % projects.length
            : (prev - 1 + projects.length) % projects.length
        );
        setPhotoIndex(0);
        setAnimating(false);
        setDirection(null);
      }, 250);
    },
    [animating, projects.length]
  );

  const goPhoto = useCallback(
    (i) => {
      if (animating || i === photoIndex) return;
      setDirection(i > photoIndex ? "right" : "left");
      setAnimating(true);
      setTimeout(() => {
        setPhotoIndex(i);
        setAnimating(false);
        setDirection(null);
      }, 200);
    },
    [animating, photoIndex]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") {
        if (photoIndex < photos.length - 1) goPhoto(photoIndex + 1);
        else goProject("right");
      }
      if (e.key === "ArrowLeft") {
        if (photoIndex > 0) goPhoto(photoIndex - 1);
        else goProject("left");
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goProject, goPhoto, onClose, photoIndex, photos.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const slideStyle = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-40px" : "40px"})`
      : "translateX(0)",
    transition: "opacity 0.25s ease, transform 0.25s ease",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(5, 10, 24, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 820,
          background: COLORS.navyMid,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Schließen"
          style={{
            position: "absolute",
            top: 16, right: 16,
            zIndex: 10,
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%",
            width: 36, height: 36,
            color: COLORS.pearl,
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.gold)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
        >
          ×
        </button>

        {/* Image */}
        <div style={{ position: "relative", height: 460, overflow: "hidden", ...slideStyle }}>
          <img
            src={photos[photoIndex]}
            alt={`${project.title} – Foto ${photoIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          <span className="tag-pill" style={{ position: "absolute", top: 16, left: 16 }}>
            {project.tag}
          </span>

          {/* Project counter */}
          <span
            style={{
              position: "absolute", bottom: 16, right: 16,
              background: "rgba(0,0,0,0.5)",
              color: COLORS.gray,
              fontSize: 11, letterSpacing: "0.08em",
              padding: "4px 10px", borderRadius: 20,
            }}
          >
            Projekt {projectIndex + 1} / {projects.length}
          </span>

          {/* Photo counter — only when multiple photos */}
          {photos.length > 1 && (
            <span
              style={{
                position: "absolute", bottom: 16, left: 16,
                background: "rgba(0,0,0,0.5)",
                color: COLORS.gold,
                fontSize: 11, letterSpacing: "0.08em",
                padding: "4px 10px", borderRadius: 20,
              }}
            >
              Foto {photoIndex + 1} / {photos.length}
            </span>
          )}
        </div>

        {/* Per-photo dots — only when multiple photos */}
        {photos.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 6, paddingTop: 14, paddingBottom: 2 }}>
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goPhoto(i)}
                aria-label={`Foto ${i + 1}`}
                style={{
                  width: i === photoIndex ? 24 : 8,
                  height: 8, borderRadius: 4,
                  border: "none", cursor: "pointer",
                  background: i === photoIndex ? COLORS.gold : "rgba(255,255,255,0.2)",
                  transition: "width 0.3s ease, background 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Caption */}
        <div style={{ padding: "20px 32px 24px", ...slideStyle }}>
          <h3 style={{ fontSize: 20, fontWeight: 500, color: COLORS.pearl, marginBottom: 10 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.8 }}>
            {project.desc}
          </p>
        </div>

        {/* Project nav arrows */}
        {projects.length > 1 && (
          <>
            <NavArrow direction="left" onClick={() => goProject("left")} />
            <NavArrow direction="right" onClick={() => goProject("right")} />
          </>
        )}

        {/* Project dots */}
        {projects.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingBottom: 20 }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i !== projectIndex && !animating) {
                    setDirection(i > projectIndex ? "right" : "left");
                    setAnimating(true);
                    setTimeout(() => {
                      setProjectIndex(i);
                      setPhotoIndex(0);
                      setAnimating(false);
                      setDirection(null);
                    }, 250);
                  }
                }}
                aria-label={`Projekt ${i + 1}`}
                style={{
                  width: i === projectIndex ? 24 : 8,
                  height: 8, borderRadius: 4,
                  border: "none", cursor: "pointer",
                  background: i === projectIndex ? COLORS.pearl : "rgba(255,255,255,0.15)",
                  transition: "width 0.3s ease, background 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NavArrow({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Vorheriges Projekt" : "Nächstes Projekt"}
      style={{
        position: "absolute",
        top: "calc(460px / 2)",
        transform: "translateY(-50%)",
        [isLeft ? "left" : "right"]: 14,
        background: "rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "50%",
        width: 42, height: 42,
        color: COLORS.pearl,
        fontSize: 20,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s, border-color 0.2s",
        zIndex: 5,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = COLORS.gold;
        e.currentTarget.style.borderColor = COLORS.gold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.45)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
      }}
    >
      {isLeft ? "‹" : "›"}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Portfolio (main export)
───────────────────────────────────────────── */
export default function Portfolio() {
  const [ref, inView] = useInView();
  const [activeTag, setActiveTag] = useState("Alle");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredProjects =
    activeTag === "Alle"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeTag);

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        style={{ padding: "120px 2rem", background: COLORS.navy }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                color: COLORS.gold,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Portfolio
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300 }}
            >
              Ausgewählte{" "}
              <span style={{ color: COLORS.gold }}>Arbeiten</span>
            </h2>
            <div className="section-divider section-divider--center" />
            <p style={{ color: COLORS.gray, fontSize: 14, fontStyle: "italic" }}>
              Ausgewählte digitale Zahntechnik-Fälle.
            </p>
            <FilterBar activeTag={activeTag} onSelect={setActiveTag} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                inView={inView}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          projects={filteredProjects}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}