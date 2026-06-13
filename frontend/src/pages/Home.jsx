import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <main className="pt-28">
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft}
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gold uppercase tracking-[0.4em] text-sm mb-4">
              Welcome to Graphite Noir
            </p>
            {/* <p className="text-gold uppercase tracking-[0.4em] text-sm mb-4">
              Noir Graphite Collection
            </p> */}

            <h1 className="text-5xl md:text-7xl font-display leading-tight">
              Where Shadows <br />
              Became Art
            </h1>

            <p className="text-cream/70 mt-3 max-w-xl text-lg">
              𝒜 𝓅𝓇𝑒𝓂𝒾𝓊𝓂 𝓅𝑒𝓃𝒸𝒾𝓁 𝒶𝓇𝓉 𝓅𝑜𝓇𝓉𝒻𝑜𝓁𝒾𝑜 𝒻𝑒𝒶𝓉𝓊𝓇𝒾𝓃𝑔 𝓇𝑒𝒶𝓁𝒾𝓈𝓉𝒾𝒸 𝓅𝑜𝓇𝓉𝓇𝒶𝒾𝓉𝓈, 𝒸𝒾𝓃𝑒𝓂𝒶𝓉𝒾𝒸 𝓈𝓀𝑒𝓉𝒸𝒽𝑒𝓈, 𝒶𝓃𝒹 𝑒𝓂𝑜𝓉𝒾𝑜𝓃-𝒻𝒾𝓁𝓁𝑒𝒹 𝑔𝓇𝒶𝓅𝒽𝒾𝓉𝑒 𝒸𝓇𝑒𝒶𝓉𝒾𝑜𝓃𝓈.
              , 𝓪𝓷𝓭 𝓮𝓶𝓸𝓽𝓲𝓸𝓷-𝓯𝓲𝓵𝓵𝓮𝓭 𝓰𝓻𝓪𝓹𝓱𝓲𝓽𝓮 𝓬𝓻𝓮𝓪𝓽𝓲𝓸𝓷𝓼.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 2}}
            variants={{ rotate: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card rounded-[3rem] p-5"
          >
            <img
              src="https://i.ibb.co/RkxdtmQG/IMG-1273.jpg"
              alt="Art workspace"
              className="w-full h-[360px] md:h-[520px] object-cover object-center rounded-[2rem]"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#090604]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -60, rotate: -2 }}
      animate={{ opacity: 1, x: 0, rotate: -2 }}
      variants={fadeLeft}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden md:block glass-card rounded-[3rem] p-5 -rotate-2"
    >
      <img
        src={aboutImg}
        alt="Artist workspace"
        className="rounded-[2rem] w-full h-[520px] object-cover"
      />
    </motion.div>

    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeRight}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-gold uppercase tracking-[0.4em] text-sm mb-4">
        About Me
      </p>
      <div className="md:hidden mt-6 mb-8">
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[2rem] p-3 -rotate-2">
          <img
            src={aboutImg}
            alt="Artist workspace"
            className="rounded-[1.5rem] w-full h-[360px] object-cover object-center"
          />
        </motion.div>
      </div>
      <h2 className="text-4xl md:text-6xl font-display leading-tight">
        Lakshitha <br />
        Samaranayaka
      </h2>

      <p className="text-cream/70 mt-6 text-lg leading-8">
        I am a pencil sketch artist who focuses on realistic portraits,
        movie-inspired drawings, and emotional graphite artworks. My style
        combines detailed shading, soft textures, and a dark premium visual mood.
      </p>

      <p className="text-cream/70 mt-4 text-lg leading-8">
        This portfolio is created to showcase my artworks professionally and help
        people explore my pencil drawings, custom portraits, and cinematic art
        collections.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="glass-card rounded-2xl p-5 text-center hover:-translate-y-2 hover:scale-105 transition-all duration-500">
          <h3 className="text-3xl font-display text-gold">20+</h3>
          <p className="text-cream/60 text-sm mt-1">Artworks</p>
        </div>

        <div className="glass-card rounded-2xl p-5 text-center hover:-translate-y-2 hover:scale-105 transition-all duration-500">
          <h3 className="text-3xl font-display text-gold">3+</h3>
          <p className="text-cream/60 text-sm mt-1">Styles</p>
        </div>

        <div className="glass-card rounded-2xl p-5 text-center hover:-translate-y-2 hover:scale-105 transition-all duration-500">
          <h3 className="text-3xl font-display text-gold">2026</h3>
          <p className="text-cream/60 text-sm mt-1">Portfolio</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 rounded-3xl hover:-translate-y-2 hover:scale-[1.05] transition-all duration-500">
            <h3 className="text-2xl font-display text-gold">Realistic Sketches</h3>
            <p className="text-cream/70 mt-3">
              Detailed pencil artworks with strong shading and emotional expression.
            </p>
          </motion.div>

          <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 rounded-3xl hover:-translate-y-2 hover:scale-[1.05] transition-all duration-500">
            <h3 className="text-2xl font-display text-gold">Movie Inspired</h3>
            <p className="text-cream/70 mt-3">
              Famous cinematic scenes and character portraits in pencil style.
            </p>
          </motion.div>

          <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 rounded-3xl hover:-translate-y-2 hover:scale-[1.05] transition-all duration-500">
            <h3 className="text-2xl font-display text-gold">Graphite Collection</h3>
            <p className="text-cream/70 mt-3">
              A curated selection of realistic portraits, cinematic sketches, and emotional pencil artworks.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;