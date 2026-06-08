import { Camera, ExternalLink, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-[#070403]">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-display text-gold font-bold">
              Graphite Noir
            </h2>

            <p className="text-cream/60 mt-4 leading-7">
              A luxury pencil art portfolio showcasing realistic portraits,
              cinematic movie-inspired drawings, and premium graphite artworks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold uppercase tracking-[0.3em] text-sm mb-5">
              Quick Links
            </h3>

            <div className="grid gap-3 text-cream/70">
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
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold uppercase tracking-[0.3em] text-sm mb-5">
              Connect
            </h3>

            <p className="text-cream/60 mb-5">
              Follow my artwork journey and contact me for custom pencil drawings.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/lakshitha_samaranayaka"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition"
              >
                <Camera size={20} />
              </a>

              <a
                href="https://www.facebook.com/lakshitha.samaranayaka"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition"
              >
                <ExternalLink size={20} />
              </a>

              <a
                href="https://www.threads.net/@lakshitha_samaranayaka"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition"
              >
                <LinkIcon size={20} />
              </a>

              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © 2026 DarkWood Arts. Crafted with passion.
          </p>

          <p className="text-cream/40 text-sm">
            Developed by <span className="text-gold">Lakshitha Samaranayaka</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;