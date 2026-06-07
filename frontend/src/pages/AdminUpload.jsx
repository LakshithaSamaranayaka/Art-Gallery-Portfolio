import { useState } from "react";
import axios from "axios";

function AdminUpload() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Portrait",
    imageUrl: "",
    description: "",
    year: "2026",
    medium: "Pencil Drawing",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/artworks", formData);
      alert("Artwork uploaded successfully");

      setFormData({
        title: "",
        category: "Portrait",
        imageUrl: "",
        description: "",
        year: "2026",
        medium: "Pencil Drawing",
      });
    } catch (error) {
      alert("Failed to upload artwork");
    }
  };

  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-3xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10">
          <h1 className="text-4xl font-display text-gold">Upload Artwork</h1>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Artwork Title"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4"
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4"
            >
              <option>Portrait</option>
              <option>Movie Art</option>
              <option>Wildlife</option>
              <option>Custom</option>
            </select>

            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4"
              required
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="5"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4"
            />

            <input
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4"
            />

            <button className="bg-gold text-black py-4 rounded-2xl font-bold">
              Upload Artwork
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AdminUpload;