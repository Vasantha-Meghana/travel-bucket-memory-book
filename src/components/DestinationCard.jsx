// DestinationCard.jsx
import React from "react";

const DestinationCard = ({ destination, onToggleVisited, onOpenMemory }) => {
  const { id, name, country, reason, image, visited, memory } = destination;

  return (
    <div style={styles.card}>
      {image && <img src={image} alt={name} style={styles.image} />}
      <div style={styles.textContent}>
        <h3 style={styles.title}>📍 {name}</h3>
        <p style={styles.country}>🌐 {country}</p>
        <p style={styles.reason}>💭 {reason}</p>
      </div>
      <div style={styles.actions}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={visited}
            onChange={() => onToggleVisited(id)}
            style={styles.checkbox}
          />{" "}
          <span style={styles.checkboxText}>Mark as Visited</span>
        </label>
        {visited && (
          <button
            style={styles.memoryButton}
            onClick={() => onOpenMemory(destination)}
          >
            {memory ? "📖 View Memory" : "📝 Save Memory"}
          </button>
        )}
      </div>
      {visited && <span style={styles.badge}>✔ Visited</span>}
    </div>
  );
};

const styles = {
  card: {
    background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
    padding: "28px 24px",
    borderRadius: "22px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "100%",
    maxWidth: "340px",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    //textAlign: "center",
    margin: "auto",
    overflow: "hidden",
    border: "1px solid #e1e8f0",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "18px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    width: "100%",
    marginBottom: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: "6px",
  },
  country: {
    fontSize: "16px",
    color: "#374151",
    marginBottom: "4px",
  },
  reason: {
    fontSize: "15px",
    color: "#6b7280",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    gap: "14px",
    width: "100%",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#111827",
    display: "flex",
    //alignItems: "center",
    gap: "10px",
    backgroundColor: "#f3f4f6",
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
  },
  checkbox: {
    transform: "scale(1.2)",
    accentColor: "#3b82f6",
  },
  checkboxText: {
    fontSize: "14px",
    fontWeight: "500",
  },
  memoryButton: {
    background: "linear-gradient(to right, #3b82f6, #2563eb)",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease",
    width: "100%",
  },
  badge: {
    position: "absolute",
    top: "14px",
    right: "14px",
    backgroundColor: "#22c55e",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
};

export default DestinationCard;
