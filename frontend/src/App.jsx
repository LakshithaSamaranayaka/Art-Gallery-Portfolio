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
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

import { useRef, useState, useEffect } from "react";

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const tryAutoplay = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked or failed:", err);
        setShowPlayPrompt(true);

        // Try to start playback on first user interaction anywhere on the page
        const onFirstInteraction = async () => {
          try {
            await audioRef.current.play();
            setPlaying(true);
            setShowPlayPrompt(false);
          } catch (err) {
            console.log("Playback after interaction failed:", err);
          }
        };

        document.addEventListener("click", onFirstInteraction, { once: true });
        document.addEventListener("touchstart", onFirstInteraction, { once: true });
      }
    };

    tryAutoplay();
  }, []);

  const enableSound = async () => {
    try {
      await audioRef.current.play();
      setPlaying(true);
      setShowPlayPrompt(false);
    } catch (err) {
      console.log("Enable sound failed:", err);
    }
  };

  return (
    <>
      {/* Background music */}
      <audio ref={audioRef} src="/music.mp3" loop />

      <ScrollToTop />

      <div className="min-h-screen wood-bg">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin-upload"
            element={
              <ProtectedRoute>
                <AdminUpload />
              </ProtectedRoute>
            }
          />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/artwork/:id" element={<ArtworkDetails />} />
        </Routes>

        <Footer />
      </div>

      {/* Music button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/80 text-white border border-white/30 backdrop-blur-md hover:bg-black transition"
        aria-label="Toggle background music"
      >
        {playing ? "🔊" : "🔇"}
      </button>

      {showPlayPrompt && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            onClick={enableSound}
            className="px-4 py-2 rounded-full bg-gold text-black font-bold shadow-lg"
          >
            Enable Sound
          </button>
        </div>
      )}
    </>
  );
}

export default App;