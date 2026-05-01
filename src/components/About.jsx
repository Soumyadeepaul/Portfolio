function About() {
  return (
    <section id="about" style={{ padding: "3rem 2rem" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>About Me</h2>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "1.2rem" }}>
          Hi, I'm Soumyadeep Paul born in year 2002, my mom dad born and brought me up in a small town called Islampur in West Bengal, India.
          Believing life is a journey and one should find happiness in the process. My mom dad are the support who kept on believeing in me and gave all possible opportunities.
          Today I stand here because of them and I am grateful for their support and love.
        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          The biggest decision of my life was to keep a belief in self and seek for one of the toughest entrance exam GATE.
          I am proud to say that I secured a rank of 1916 in GATE 2025, which is a testament to my dedication and hard work.
        </p>

        <p>
          My focus lies in Artificial Intelligence, backend systems, and scalable architectures.
          I enjoy turning complex ideas into working products.
          Currently exploring the intersection of AI and real-world applications,
          with the goal of building impactful, production-ready systems.
        </p>
      </div>

      {/* HIGHLIGHTS */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <strong>Goal</strong>
          <p>To make tomorrow better</p>
        </div>

        <div>
          <strong>Focus</strong>
          <p>To create a sustaniable world with AI Systems</p>
        </div>

        <div>
          <strong>Strength/Weakness</strong>
          <p>Beliving</p>
        </div>
      </div>
    </section>
  );
}

export default About;