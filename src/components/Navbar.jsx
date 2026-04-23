function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        maxWidth: "100%",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LOGO / NAME */}
      <h3 style={{ margin: 0 }}>soumyadeep.nitk</h3>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RESUME BUTTON */}
      <a href="SoumyadeepPaul_252CS032_MTech.pdf" target="_blank">
        <button>Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;