import { education } from "../data/education";

function Education() {
  return (
    <section
      id="education"
      style={{
        marginTop: "5rem",
        padding: "0 1rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        Education
      </h2>

      {/* MAIN CONTAINER (IMPORTANT) */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* ================= TIMELINE ================= */}
        <div style={{ position: "relative", marginBottom: "2.5rem" }}>
          
          {/* LINE */}
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, #7c3aed, #ec4899, #f59e0b)",
              position: "absolute",
              top: "20px",
              left: 0,
              right: 0,
            }}
          />

          {/* POINTS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {education.map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                
                {/* YEAR */}
                <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                  {item.year}
                </p>

                {/* DOT */}
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ec4899",
                    margin: "6px auto 0",
                    boxShadow: "0 0 8px #ec4899",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {education.map((item, i) => (
            <div
              key={i}
              style={{
                width: "220px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--card)",
                transition: "0.2s",
                textAlign: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <div style={{ padding: "0.8rem" }}>
                <h3 style={{ margin: "0.3rem 0", fontSize: "1rem" }}>
                  {item.institute}
                </h3>

                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>
                  {item.degree}
                </p>

                <p style={{ margin: "2px 0", fontSize: "0.75rem", opacity: 0.5 }}>
                  {item.year}
                </p>

                <p
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--primary)",
                    fontWeight: "500",
                  }}
                >
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;