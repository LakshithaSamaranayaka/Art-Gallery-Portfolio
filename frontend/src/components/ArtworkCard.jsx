import { Link } from "react-router-dom";

function ArtworkCard({ artwork }) {
  return (
    <Link
      to={`/artwork/${artwork._id}`}
      className="glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-2xl block"
    >
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-96 object-contain bg-black"
      />

      <div className="p-6">
        <p className="text-gold text-xs uppercase tracking-[0.3em]">
          {artwork.category}
        </p>

        <h3 className="text-2xl font-display mt-2">{artwork.title}</h3>

        <p className="text-cream/70 mt-3 text-sm">
          {artwork.description}
        </p>

        <div className="mt-5 flex justify-between text-sm text-cream/50">
          <span>{artwork.medium}</span>
          <span>{artwork.year}</span>
        </div>
      </div>
    </Link>
  );
}

export default ArtworkCard;