function Contact() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-16">
          <p className="text-gold uppercase tracking-[0.4em] text-sm">
            Contact
          </p>

          <h1 className="text-5xl font-display mt-4">Request Artwork</h1>

          <form className="mt-8 grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              placeholder="Tell me about your artwork request"
              rows="6"
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            ></textarea>

            <button
              type="button"
              className="bg-gold text-black py-4 rounded-2xl font-bold hover:bg-cream transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;