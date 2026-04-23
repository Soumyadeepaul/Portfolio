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
      <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" , justifyContent: "center"}} className="nav-links" >
        <a href="mailto:paulsoumyadeep7@gmail.com">
            Mail to contact
        </a>
      </p>
    </section>
  );
}

export default Contact;