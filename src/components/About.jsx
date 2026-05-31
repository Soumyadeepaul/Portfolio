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
          Hi, I’m Soumyadeep Paul, born in 2002 and raised in a small town called Islampur in West Bengal, India. I believe life is a journey, and true happiness comes from enjoying the process along the way.

          My parents have always been my greatest support system. They believed in me during every stage of life and provided me with every opportunity they could. Whatever I am today is because of their love, sacrifices, and constant encouragement. I am deeply grateful for their support and guidance.

        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          One of the biggest decisions of my life was believing in myself and preparing for one of India’s toughest entrance examinations, GATE. Through consistent dedication, discipline, and hard work, I was able to secure an All India Rank of 1916 in GATE 2025. This achievement reflects my perseverance, determination, and commitment to continuous growth.
        </p>

        <p>
          My primary interests lie in Artificial Intelligence, backend systems, and scalable architectures. I enjoy transforming complex ideas into practical and efficient products. Currently, I am exploring the intersection of AI and real-world applications, with the goal of building impactful, reliable, and production-ready systems.

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