function ActivityCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      style={{
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--card)",
        transition: "0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.02)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src={item.image}
        alt=""
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "0.8rem" }}>
        <p style={{ margin: 0 }}>{item.caption}</p>
        <p style={{ margin: 0, opacity: 0.6, fontSize: "0.8rem" }}>
          {item.date}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;