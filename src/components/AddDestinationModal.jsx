// AddDestinationModal.jsx
import React, { useState } from "react";

const AddDestinationModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [reason, setReason] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDestination = {
      id: Date.now(),
      name,
      country,
      reason,
      image,
      visited: false,
      memory: null,
    };
    onAdd(newDestination);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>🌍 Add a Travel Destination</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="🏖️ Destination Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="🇺🇸 Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="💡 Reason to Visit"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="🖼️ Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={styles.input}
          />
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.addButton}>
              ➕ Add
            </button>
            <button type="button" onClick={onClose} style={styles.cancelButton}>
              ✖ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(6px)",
    padding: "20px",
  },
  modal: {
    backgroundColor: "#ffffffee",
    borderRadius: "16px",
    padding: "35px 30px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
    animation: "fadeIn 0.4s ease-in-out",
    transition: "all 0.3s ease-in-out",
  },
  title: {
    fontSize: "24px",
    marginBottom: "25px",
    fontWeight: "700",
    textAlign: "center",
    color: "#1a1a1a",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
    width: "100%",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    width: "45%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    width: "45%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
};

export default AddDestinationModal;
