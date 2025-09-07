// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema
const DestinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  reason: String,
  visited: { type: Boolean, default: false },
  memory: {
    story: String,
    photos: [String], // store image URLs later if needed
  },
});

const Destination = mongoose.model("Destination", DestinationSchema);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Travel Bucket Backend is running!");
});

// Get all destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const data = await Destination.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a destination
app.post("/api/destinations", async (req, res) => {
  try {
    const dest = new Destination(req.body);
    await dest.save();
    res.json(dest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a destination
app.put("/api/destinations/:id", async (req, res) => {
  try {
    const dest = await Destination.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(dest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a destination
app.delete("/api/destinations/:id", async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
