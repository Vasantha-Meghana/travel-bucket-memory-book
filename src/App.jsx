// App.jsx
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle"; // adjust path if needed

const App = () => {
  const [theme, setTheme] = useState("light");

  // Optional: Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const appStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: theme === "dark" ? "#1a202c" : "#f2f2f2",
    color: theme === "dark" ? "#f2f2f2" : "#1a202c",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyles}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
};

export default App;
