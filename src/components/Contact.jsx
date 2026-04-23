function Contact() {
  return (
    <section
      id="contact"
      style={{
        marginTop: "5rem",
        maxWidth: "600px",
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      <h2>Contact</h2>

      {/* EMAIL */}
      <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>
        <a href="mailto:paulsoumyadeep7@gmail.com">
            Point of contact
        </a>
      </p>

      {/* SOCIAL LINKS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {/* <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">LeetCode</a> */}
      </div>
    </section>
  );
}

export default Contact;