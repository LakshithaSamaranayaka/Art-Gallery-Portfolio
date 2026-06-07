function About() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-16">
          <p className="text-gold uppercase tracking-[0.4em] text-sm">
            About Artist
          </p>

          <h1 className="text-5xl font-display mt-4">I create emotional pencil art.</h1>

          <p className="text-cream/70 mt-6 text-lg leading-8">
            I am a pencil sketch artist focused on realistic portraits, cinematic
            scenes, wildlife drawings, and custom artworks. My style combines
            detailed graphite shading with dark, premium presentation.
          </p>

          <p className="text-cream/70 mt-4 text-lg leading-8">
            This portfolio is built to present my artworks professionally and help
            clients explore my gallery, contact me, and request custom drawings.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;