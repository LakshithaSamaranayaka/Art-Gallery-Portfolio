import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ArtworkDetails() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/artworks/${id}`);
        setArtwork(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtwork();
  }, [id]);

  if (!artwork) {
    return (
      <main className="pt-32 min-h-screen text-center">
        <p className="text-cream/70">Loading artwork...</p>
      </main>
    );
  }

  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <Link
          to="/gallery"
          className="text-gold hover:text-cream transition"
        >
          ← Back to Gallery
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 mt-8 items-start">
          <div className="glass-card rounded-[2rem] p-4">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full max-h-[750px] object-contain rounded-[1.5rem] bg-black"
            />
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-gold text-sm uppercase tracking-[0.4em]">
              {artwork.category}
            </p>

            <h1 className="text-5xl font-display mt-4">
              {artwork.title}
            </h1>

            <p className="text-cream/70 mt-6 leading-8">
              {artwork.description}
            </p>

            <div className="mt-8 grid gap-4 text-cream/80">
              <div className="flex justify-between border-b border-gold/20 pb-3">
                <span className="text-gold">Medium</span>
                <span>{artwork.medium}</span>
              </div>

              <div className="flex justify-between border-b border-gold/20 pb-3">
                <span className="text-gold">Year</span>
                <span>{artwork.year}</span>
              </div>

              <div className="flex justify-between border-b border-gold/20 pb-3">
                <span className="text-gold">Artwork ID</span>
                <span className="text-xs">{artwork._id}</span>
              </div>
            </div>

            <a
              href={artwork.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-cream transition"
            >
              View Full Image
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArtworkDetails;