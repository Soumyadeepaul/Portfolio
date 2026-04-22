import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function ProjectsSidebar() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="sidebar">
      <h3 style={{ padding: "1rem" }}>Projects</h3>

      <div className="scroll-container">
        {[...projects, ...projects].map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            style={{
              margin: "0.5rem",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid var(--border)",
              background: "var(--card)",
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
              <h4 style={{ margin: 0 }}>{p.title}</h4>

              <a href={p.github} target="_blank" style={{ fontSize: "0.8rem" }}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default ProjectsSidebar;