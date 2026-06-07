const express = require("express");
const Artwork = require("../models/Artwork");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Get all artworks
router.get("/", async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ createdAt: -1 });
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch artworks" });
  }
});

// Get single artwork
router.get("/:id", async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    res.json(artwork);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch artwork" });
  }
});

// Create artwork
router.post("/", protectAdmin, async (req, res) => {
  try {
    const artwork = await Artwork.create(req.body);
    res.status(201).json(artwork);
  } catch (error) {
    res.status(400).json({ message: "Failed to create artwork" });
  }
});

module.exports = router;