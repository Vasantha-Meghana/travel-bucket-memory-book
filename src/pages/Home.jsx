import React, { useEffect, useState } from "react";
import AddDestinationModal from "../components/AddDestinationModal";
import SaveMemoryModal from "../components/SaveMemoryModal";
import DestinationCard from "../components/DestinationCard";
import FilterBar from "../components/FilterBar";
import ThemeToggle from "../components/ThemeToggle";
import DashBoard from "../components/Dashboard";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedForMemory, setSelectedForMemory] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("destinations");
    if (stored) setDestinations(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  const toggleVisited = (id) => {
    setDestinations(
      destinations.map((dest) =>
        dest.id === id ? { ...dest, visited: !dest.visited } : dest
      )
    );
  };

  const saveMemory = (id, memory) => {
    setDestinations(
      destinations.map((dest) => (dest.id === id ? { ...dest, memory } : dest))
    );
  };

  const filteredDestinations = destinations.filter((d) => {
    if (filter === "visited" && !d.visited) return false;
    if (filter === "wishlist" && d.visited) return false;
    if (
      searchTerm &&
      !d.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !d.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  const containerStyle = {
    padding: "20px",
    backgroundColor: theme === "dark" ? "#1a202c" : "#f2f2f2",
    color: theme === "dark" ? "#f0f4f8" : "#1a202c",
    minHeight: "100vh",
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#4a5568" : "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Travel Bucket & Memory Book
      </h1>

      <button onClick={() => setShowAddModal(true)} style={buttonStyle}>
        Add New Destination
      </button>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onToggleVisited={toggleVisited}
            onOpenMemory={setSelectedForMemory}
            theme={theme} // optional: pass theme to child components
          />
        ))}
      </div>

      <DashBoard destinations={destinations} theme={theme} />

      {showAddModal && (
        <AddDestinationModal
          onClose={() => setShowAddModal(false)}
          onAdd={addDestination}
          theme={theme}
        />
      )}

      {selectedForMemory && (
        <SaveMemoryModal
          destination={selectedForMemory}
          onClose={() => setSelectedForMemory(null)}
          onSave={saveMemory}
          theme={theme}
        />
      )}
    </div>
  );
};

export default Home;
