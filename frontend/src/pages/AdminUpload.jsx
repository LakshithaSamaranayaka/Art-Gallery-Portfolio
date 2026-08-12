import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminUpload() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  }
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

  const token = localStorage.getItem("adminToken");

  if (!token) {
    alert("Please login first");
    navigate("/admin-login");
    return;
  }

  // Client-side validation for required fields
  if (!formData.title.trim() || !formData.imageUrl.trim() || !formData.category.trim()) {
    alert("Please provide Title, Category and Image URL before uploading.");
    return;
  }

  try {
    const res = await axios.post(
      "https://art-gallery-portfolio-634e.vercel.app/api/artworks",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
    // Log full response for debugging
    console.log("Upload error response:", error.response?.data || error.message);

    const resp = error.response?.data;
    const message = resp?.message || error.message || "Failed to upload artwork";

    // If Mongoose validation errors exist, join their messages
    let details = "";
    if (resp?.errors) {
      details = Object.values(resp.errors).map((e) => e.message).join("; ");
    }

    alert(message + (details ? `: ${details}` : ""));
  }
};

  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-3xl mx-auto px-6">
        <button
      onClick={handleLogout}
      className="mb-6 border border-gold text-gold px-5 py-2 rounded-full hover:bg-gold hover:text-black transition"
    >
      Logout
    </button>
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