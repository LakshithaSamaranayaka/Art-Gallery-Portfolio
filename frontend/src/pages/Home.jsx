import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="pt-28">
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.4em] text-sm mb-4">
              Luxury Pencil Art Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-display leading-tight">
              Dark, Premium <br />
              Pencil Art Gallery
            </h1>

            <p className="text-cream/70 mt-6 max-w-xl text-lg">
              A cinematic portfolio website to showcase realistic pencil
              sketches, portraits, movie-inspired drawings, and custom artwork.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/gallery"
                className="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-cream transition"
              >
                Explore Gallery
              </Link>

              <Link
                to="/contact"
                className="border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-[3rem] p-5 rotate-2">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f"
              alt="Art workspace"
              className="rounded-[2rem] w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-display text-gold">Realistic Sketches</h3>
            <p className="text-cream/70 mt-3">
              Detailed pencil artworks with strong shading and emotional expression.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-display text-gold">Movie Inspired</h3>
            <p className="text-cream/70 mt-3">
              Famous cinematic scenes and character portraits in pencil style.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-display text-gold">Custom Orders</h3>
            <p className="text-cream/70 mt-3">
              Personal portraits, gift artworks, and premium framed art displays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;