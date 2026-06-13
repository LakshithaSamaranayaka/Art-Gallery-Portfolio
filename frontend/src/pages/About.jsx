import Image from "../assets/aboutpage.jpg";

function About() {
  return (
    <main className="pt-32 min-h-screen bg-[#090604]">
      {/* Hero */}
      <section className="max-w-9xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.4em] text-sm mb-5">
            About Graphite Noir
          </p>

          <h1 className="text-5xl md:text-7xl font-display leading-tight">
            Art is not just drawn. <br />
            It is felt.
          </h1>

          <p className="text-cream/60 mt-4 text-lg md:text-xl leading-9 max-w-full ">
            Graphite Noir is a personal pencil art portfolio built around realistic portraits, cinematic sketches, and emotion-filled graphite
            artworks. Every drawing is created with patience, detail, and a deep
            respect for the story behind the subject.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-[3rem] p-8 md:p-12">
            <p className="text-gold uppercase tracking-[0.35em] text-sm mb-4">
              The Artist
            </p>
          <div className="mt-6 mb-8 rounded-[2rem] p-3 border border-gold/20 bg-black/30">
            <img
              src={Image}
              alt="Lakshitha Samaranayaka"
              className="w-full h-[400px] object-cover object-[center_35%] rounded-[1.5rem]"
            />
          </div>
            {/* Mobile Only Profile Image */}
      <div className="md:hidden mt-8 mb-10 flex flex-col items-center">
        {/* <div className="rounded-[2rem] p-3 border border-gold/20 bg-black/30 w-full max-w-[420px]">
           <img
            src={Image}
            alt="Lakshitha Samaranayaka"
            className="w-full h-[360px] object-cover object-[center_35%] rounded-[1.5rem]"
       />
     </div> */}
<div className="-mt-5 w-full">
  <h2 className="text-2xl font-display text-cream leading-tight text-left">
     Lakshitha  Samaranayaka 
    </h2>
    </div>
     </div>

            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              I turn silence, shadow, and emotion into pencil art.
            </h2>

            <p className="text-cream/70 mt-6 leading-8">
              I am a pencil sketch artist who focuses on realistic portraits,
              movie-inspired drawings, and meaningful graphite artworks. My work
              is built through careful observation, soft shading, texture, and
              emotional expression.
            </p>

            <p className="text-cream/70 mt-4 leading-8">
              For me, drawing is not only about copying an image. It is about
              capturing a feeling, a memory, a character, and a moment that can
              stay alive through art.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="glass-card rounded-[2rem] p-7">
              <h3 className="text-2xl font-display text-gold">
                Realistic Detail
              </h3>
              <p className="text-cream/70 mt-3 leading-7">
                Every artwork is created with careful observation and layered graphite
                techniques. I focus on facial structure, eye expression, hair texture, light,
                shadow, and contrast to bring realism into each portrait. My goal is to make
                the viewer feel that the subject has emotion, depth, and life beyond the paper.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-7">
              <h3 className="text-2xl font-display text-gold">
                Cinematic Emotion
              </h3>
              <p className="text-cream/70 mt-3 leading-7">
               Cinema inspires many of my drawings because films carry powerful emotions,
               unforgettable characters, and meaningful moments. I try to capture the silence,
               tension, sadness, strength, or mystery behind a scene, not just the physical
               appearance of the character. Each sketch becomes a still frame with feeling
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-7">
              <h3 className="text-2xl font-display text-gold">
                Personal Meaning
              </h3>
              <p className="text-cream/70 mt-3 leading-7">
                For me, pencil art is personal. A portrait can represent love, memory,
                admiration, identity, or a story that words cannot fully explain. Whether it is
                a famous character, a family bond, or a meaningful face, I try to turn each
                drawing into something emotional, valuable, and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value of Art */}
      <section className="border-y border-gold/20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <p className="text-gold uppercase tracking-[0.35em] text-sm mb-4">
                The Value of Art
              </p>

              <h2 className="text-4xl md:text-5xl font-display leading-tight">
                Art gives emotion a place to live.
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-cream/70 text-lg leading-9">
                The value of art is not only in the paper, pencil, or frame. Its
                real value is in the time, emotion, patience, and vision behind
                it. A good artwork can hold a memory, express a personality, and
                make people feel something without saying a word.
              </p>

              <p className="text-cream/70 text-lg leading-9 mt-5">
                An artist sees what others may miss. Through lines, shadows, and
                details, the artist gives ordinary moments a deeper meaning. That
                is why handmade art feels special. It carries human effort,
                imperfection, emotion, and originality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Closing */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-display leading-tight">
          “Every shadow has a story. <br />
          Every stroke has a soul.”
        </h2>

        <p className="text-cream/60 mt-6 text-lg">
          Graphite Noir is where pencil drawings become timeless visual stories.
        </p>
      </section>
    </main>
  );
}

export default About;