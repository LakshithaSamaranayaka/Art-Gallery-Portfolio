const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    year: {
      type: String,
    },
    medium: {
      type: String,
      default: "Pencil Drawing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artwork", artworkSchema);