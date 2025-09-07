import React, { useState, useEffect } from "react";

const SaveMemoryModal = ({ destination, onClose, onSave }) => {
  const [memoryText, setMemoryText] = useState("");
  const [memoryImage, setMemoryImage] = useState("");
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    setMemoryText(destination.memory || "");
    setMemoryImage(destination.memoryImage || "");
    setIsViewing(!!destination.memory);
  }, [destination]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 300;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setMemoryImage(resizedDataUrl);
      };
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!memoryText.trim()) return;
    onSave(destination.id, memoryText.trim(), memoryImage);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>
          {isViewing ? "📖 Your Memory" : "📝 Save a Memory"}
        </h2>
        <h4 style={styles.subTitle}>{destination.name}</h4>

        {isViewing ? (
          <div style={styles.memoryView}>
            <p style={styles.memoryText}>{memoryText}</p>
            {destination.memoryImage && (
              <img
                src={destination.memoryImage}
                alt="Saved Memory"
                style={styles.imageView}
              />
            )}
            <button onClick={() => setIsViewing(false)} style={styles.editBtn}>
              ✏️ Edit Memory
            </button>
          </div>
        ) : (
          <>
            <textarea
              value={memoryText}
              onChange={(e) => setMemoryText(e.target.value)}
              rows="5"
              style={styles.textarea}
              placeholder="Write about your experience..."
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.fileInput}
            />
            {memoryImage && (
              <img src={memoryImage} alt="Preview" style={styles.preview} />
            )}
            <div style={styles.buttonRow}>
              <button onClick={handleSave} style={styles.saveBtn}>
                💾 Save
              </button>
              <button onClick={onClose} style={styles.cancelBtn}>
                ❌ Cancel
              </button>
            </div>
          </>
        )}
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
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    overflow: "auto",
    padding: "20px",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "480px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  memoryView: {
    textAlign: "center",
  },
  memoryText: {
    whiteSpace: "pre-wrap",
    fontSize: "16px",
    marginBottom: "20px",
  },
  imageView: {
    width: "100%",
    maxWidth: "300px",
    margin: "0 auto 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  preview: {
    width: "100%",
    maxWidth: "300px",
    marginTop: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "12px",
    resize: "vertical",
  },
  fileInput: {
    marginBottom: "12px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  saveBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelBtn: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  editBtn: {
    padding: "10px 16px",
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SaveMemoryModal;
