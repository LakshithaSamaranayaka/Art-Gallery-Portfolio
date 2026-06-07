import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminUpload from "./pages/AdminUpload";
import AdminLogin from "./pages/AdminLogin";
import ArtworkDetails from "./pages/ArtworkDetails";

function App() {
  return (
    <div className="min-h-screen wood-bg">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-upload" element={<AdminUpload />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/artwork/:id" element={<ArtworkDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;