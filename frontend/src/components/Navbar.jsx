import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display text-gold font-bold">
          DarkWood Arts
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link to="/" className="hover:text-gold">Home</Link>
          <Link to="/gallery" className="hover:text-gold">Gallery</Link>
          <Link to="/about" className="hover:text-gold">About</Link>
          <Link to="/contact" className="hover:text-gold">Contact</Link>
        </div>

        <Link
          to="/gallery"
          className="bg-gold text-black px-5 py-2 rounded-full font-semibold hover:bg-cream transition"
        >
          View Arts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;