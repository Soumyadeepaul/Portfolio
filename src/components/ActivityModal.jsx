function ActivityModal({ item, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--card)",
          padding: "1rem",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <img
          src={item.image}
          alt=""
          style={{
            width: "100%",
            borderRadius: "8px",
          }}
        />

        <p style={{ marginTop: "1rem" }}>{item.caption}</p>
        <p style={{ opacity: 0.6 }}>{item.date}</p>
      </div>
    </div>
  );
}

export default ActivityModal;