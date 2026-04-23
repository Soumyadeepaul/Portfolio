import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function ProjectsSidebar() {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* 🔥 HEADER (dedicated space) */}
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          fontWeight: "500",
          color: "var(--text-h)",
        }}
      >
        Projects
      </div>

      {/* 🔥 SCROLL AREA */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "0.5rem",
        }}
      >
        <div className="scroll-container">
          {[...projects, ...projects].map((p, i) => (  // 🔥 loop for smooth scroll
            <div
              key={i}
              onClick={() => setSelected(p)}
              style={{
                margin: "0.5rem 0",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                cursor: "pointer",
                background: "var(--bg)",
                transition: "0.2s",
              }}
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <div style={{ padding: "0.8rem" }}>
                <h4 style={{ margin: "0 0 0.3rem 0" }}>{p.title}</h4>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default ProjectsSidebar;