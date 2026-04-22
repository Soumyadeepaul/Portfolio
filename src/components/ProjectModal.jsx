function ProjectModal({ project, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(9, 9, 9, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "500px",
          background: "var(--card)",
          borderRadius: "12px",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        {/* DETAILS */}
        <h2>{project.title}</h2>
        <p style={{color: "white"}}>{project.description}</p>
        <p style={{ opacity: 0.7 , color: "white"}}>{project.tech}</p>

        {/* LINKS */}
        <div
        style={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "1rem",
        }}
        >
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.demo} target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;