import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://art-gallery-portfolio-634e.vercel.app/api/admin/login", formData);

      localStorage.setItem("adminToken", res.data.token);

      alert("Admin login successful");
      navigate("/admin-upload");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-md mx-auto px-6">
        <div className="glass-card rounded-[2rem] p-8">
          <h1 className="text-4xl font-display text-gold mb-6">
            Admin Login
          </h1>

          <form onSubmit={handleLogin} className="grid gap-5">
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Admin Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
              required
            />

            <button className="bg-gold text-black py-4 rounded-2xl font-bold hover:bg-cream transition">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;