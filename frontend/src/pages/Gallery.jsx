import { useEffect, useState } from "react";
import axios from "axios";
import ArtworkCard from "../components/ArtworkCard";

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || "";
        const res = await axios.get(`${baseUrl}api/artworks`);
        setArtworks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtworks();
  }, []);

  const filteredArtworks =
    category === "All"
      ? artworks
      : artworks.filter((art) => art.category === category);

  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-sm">
            My Collection
          </p>
          <h1 className="text-5xl font-display mt-4">Artwork Gallery</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Portrait", "Movie Art", "Wildlife", "Custom"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full border ${
                category === item
                  ? "bg-gold text-black border-gold"
                  : "border-gold/40 text-gold"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredArtworks.length === 0 ? (
          <p className="text-center text-cream/60">
            No artworks found. Upload artworks from admin page.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork._id} artwork={artwork} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Gallery;