import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const isInstagramBrowser =
          /Instagram/i.test(navigator.userAgent);
  const [desktopFallback, setDesktopFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const myPhoneNumber = "+94742859116";
  const myEmail = "samaranayakal95@gmail.com";
  const createMessage = () => {
    return `Hello, I Like Your artworks.

Name: ${formData.name}
Phone Number: ${formData.phone}

Artwork Request:
${formData.message}`;
  };

  const isMobileDevice = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setDesktopFallback(false);
    setCopied(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const smsMessage = createMessage();

    if (isMobileDevice()) {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      const smsURL = isIOS
        ? `sms:${myPhoneNumber}&body=${encodeURIComponent(smsMessage)}`
        : `sms:${myPhoneNumber}?body=${encodeURIComponent(smsMessage)}`;

      window.open(smsURL, "_self");
    } else {
      setDesktopFallback(true);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(createMessage());
      setCopied(true);
    } catch (error) {
      alert("Could not copy message. Please copy it manually.");
    }
  };

  const handleEmailFallback = () => {
    const subject = `Artwork Request from ${formData.name}`;
    const body = createMessage();

    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="pt-32 md:pt-40 pb-20 min-h-screen">
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-16">
          <p className="text-gold uppercase tracking-[0.4em] text-sm">
            Contact
          </p>

          <h1 className="text-2xl font-display mt-4">Share Your Idea With Graphite Noir 🖌️</h1>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              name="message"
              placeholder="Hello, I like your artwork...😇"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-black/40 border border-gold/20 rounded-2xl px-5 py-4 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gold text-black py-4 rounded-2xl font-bold hover:bg-cream transition"
            >
              Send SMS Message
            </button>
          </form>

           {isInstagramBrowser && (
  <div className="mt-8 relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#1b1511] to-[#0f0b08] p-8">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]"></div>


      <h3 className="text-2xl md:text-4xl font-display text-cream leading-tight">
        Open Graphite Noir in Your Browser
      </h3>

      <p className="text-cream/70 mt-4 text-sm md:text-lg leading-7 max-w-xl">
        Instagram's built-in browser may limit certain features.
        For the complete Graphite Noir experience, Go to Home & open this portfolio
        in Safari or Chrome.
      </p>

<div className="mt-8 flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>

    <span className="text-gold text-xs tracking-[0.25em] uppercase">
      Recommended
    </span>
  </div>

 <a
  href="/https://graphit-noir-weld.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleASpAjxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae6f-2lT3C2efgJoCrvs9qigpoI5eDY8Zlsbci6H1lbpjLsd7fMOfo35yv2Ew_aem_YWdncwCyiRVAjMLcaQtkxRKeb-kD&brid=YWdncwHHNgSCUqcaKhth4slqBCYI"
  className="block w-full text-center border border-gold/40 text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-500"
>
  ← Return Home
</a>

</div>
    </div>
  
)}


          {desktopFallback && (
            <div className="mt-8 bg-black/40 border border-gold/20 rounded-3xl p-6">
              <h2 className="text-2xl font-display text-gold">
                SMS works best on mobile
              </h2>

              <p className="text-cream/70 mt-3 leading-7">
                Normal SMS cannot be sent directly from most desktop browsers.
                Please open this page on your phone, or copy the request message
                and send it manually.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="bg-gold text-black py-3 rounded-2xl font-bold hover:bg-cream transition"
                >
                  {copied ? "Copied" : "Copy Message"}
                </button>

                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="border border-gold text-gold py-3 rounded-2xl font-bold hover:bg-gold hover:text-black transition"
                >
                  Send Email
                </button>

                <a
                  href={`tel:${myPhoneNumber}`}
                  className="text-center border border-gold text-gold py-3 rounded-2xl font-bold hover:bg-gold hover:text-black transition"
                >
                  Call Me
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;


