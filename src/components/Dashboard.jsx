// DashBoard.jsx
import React from "react";

const DashBoard = ({ destinations }) => {
  const visitedCount = destinations.filter((d) => d.visited).length;
  const wishlistCount = destinations.length - visitedCount;
  const totalMemories = destinations.filter((d) => d.memory).length;

  const topCountries = [
    ...destinations.reduce((acc, curr) => {
      acc.set(curr.country, (acc.get(curr.country) || 0) + 1);
      return acc;
    }, new Map()),
  ]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Travel Dashboard</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>✔ Visited</h3>
          <p style={styles.cardValue}>{visitedCount}</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>❤️ Wishlist</h3>
          <p style={styles.cardValue}>{wishlistCount}</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📷 Memories</h3>
          <p style={styles.cardValue}>{totalMemories}</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🌍 Top Countries</h3>
          <ul style={styles.list}>
            {topCountries.map(([country, count]) => (
              <li key={country} style={styles.listItem}>
                {country} <span style={styles.count}>({count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    marginTop: "40px",
    borderRadius: "16px",
    background: "linear-gradient(to bottom, #f0f4f8, #e0e7ef)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px",
    margin: "40px auto",
  },
  heading: {
    fontSize: "26px",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#007bff",
  },
  cardValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: "15px",
    padding: "5px 0",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px dashed #ccc",
  },
  count: {
    color: "#555",
    fontWeight: "500",
  },
};

export default DashBoard;
