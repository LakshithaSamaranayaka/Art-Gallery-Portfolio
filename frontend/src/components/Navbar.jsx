import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scrolling down, hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } 
      // When scrolling up, show navbar
      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-gold/20 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-10 py-4 grid grid-cols-3 items-center">
        {/* Left Logo */}
        <Link
          to="/"
          className="text-2xl font-display text-gold font-bold justify-self-start"
        >
          Graphite Noir
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest justify-self-center">
          <Link to="/" className="hover:text-gold transition">
            Home
          </Link>

          <Link to="/gallery" className="hover:text-gold transition">
            Gallery
          </Link>

          <Link to="/about" className="hover:text-gold transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-gold transition">
            Contact
          </Link>
        </div>

        {/* Right Button */}
        <Link
          to="/gallery"
          className="bg-gold text-black px-5 py-2 rounded-full font-semibold hover:bg-cream transition justify-self-end"
        >
          View Arts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;