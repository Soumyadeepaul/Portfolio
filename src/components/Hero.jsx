import SocialLinks from "./SocialLinks";

const rankStyle = {
  color: "goldenrod",
  fontWeight: "600",
  fontSize: "1.2rem",
};

const rankSubStyle = {
  color: "var(--primary)",
  fontWeight: "600",
  fontSize: "0.9rem",
};

function Hero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4rem 3rem",
        minHeight: "100vh",
        background: "var(--bg)",
      }}
    >
      {/* LEFT */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        
        {/* SMALL TEXT */}
        <p style={{ opacity: 0.6, marginBottom: "1rem" }}>
          Available for opportunities
        </p>

        {/* BIG TEXT */}
        <h1 style={{
        fontSize: "clamp(2.5rem, 5vw, 4rem)", // responsive 🔥
        lineHeight: "1.1",
        margin: 0,
        }}>
        I AM <br />
        <span style={{ fontWeight: "800" }}>Soumyadeep Paul</span>
        </h1>

        {/* ROLE */}
        <h2 style={{ marginTop: "1rem", fontWeight: "normal" }}>
          Computer Science Engineering Student at NIT Karnataka
        </h2>

        {/* SUBTEXT */}
        <div
          style={{
            marginTop: "0.8rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          <span style={rankStyle}>GATE 2025 Rank 1916</span>
          <span style={rankSubStyle}>GATE 2024 Rank 13242</span>
          <span style={rankSubStyle}>WBJEE 2020 Rank 6833</span>
        </div>

        <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
          On the path to building AI-driven world
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",   // 🔥 center horizontally
            marginTop: "0.1rem",
          }}
          className="nav-links"
        >
        <a
        href="SoumyadeepPaul_252CS032_MTech.pdf"
        target="_blank"
        style={{
          position: "relative",
          padding: "10px 18px",
          textDecoration: "none",
          color: "var(--text)",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
      Resume

    {/* underline animation */}
    <span
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "1px",
        background: "var(--text)",
      }}
    />
  </a>
</div>

        {/* SOCIAL */}
        <div
        style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          
        }}
        className="nav-links"
        >
        <SocialLinks />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ position: "relative" }}>
        <img
          src="/profile.jpg"
          alt="profile"
          style={{
            width: "320px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </section>
  );
}

const btnStyle = {
  padding: "10px 18px",
  border: "none",
  background: "var(--primary)",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer",
};

const btnOutline = {
  padding: "10px 18px",
  border: "1px solid var(--border)",
  background: "transparent",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Hero;