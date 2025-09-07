// FilterBar.jsx
import React from "react";

const FilterBar = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div style={styles.container}>
      <div style={styles.filters}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="all"
            checked={filter === "all"}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.radio}
          />{" "}
          All
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="wishlist"
            checked={filter === "wishlist"}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.radio}
          />{" "}
          Wishlist
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="visited"
            checked={filter === "visited"}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.radio}
          />{" "}
          Visited
        </label>
      </div>
      <input
        type="text"
        placeholder="🔍 Search destination or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBox}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "30px 0 20px 0",
    gap: "12px",
    padding: "12px 20px",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #f0f4ff, #e8f0ff)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  filters: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  radioLabel: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  radio: {
    transform: "scale(1.2)",
    accentColor: "#007bff",
  },
  searchBox: {
    flex: "1",
    minWidth: "250px",
    padding: "10px 16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
    outline: "none",
  },
};

export default FilterBar;
