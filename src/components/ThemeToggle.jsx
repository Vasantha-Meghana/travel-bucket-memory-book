// ThemeToggle.jsx
import React, { useEffect } from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#1a202c" : "#f0f4f8";
    document.body.style.color = theme === "dark" ? "#f0f4f8" : "#1a202c";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} style={styles.toggleButton}>
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

const styles = {
  toggleButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    zIndex: 2000,
  },
};

export default ThemeToggle;
