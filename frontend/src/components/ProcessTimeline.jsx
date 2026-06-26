import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Idea",
    desc: "Understanding the client's vision and gathering inspiration.",
  },
  {
    number: "02",
    title: "Sketch",
    desc: "Creating the first graphite outline with perfect proportions.",
  },
  {
    number: "03",
    title: "Shading",
    desc: "Building depth, lighting and realistic textures layer by layer.",
  },
  {
    number: "04",
    title: "Final Artwork",
    desc: "Refining every detail to create a premium graphite masterpiece.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <p className="text-gold uppercase tracking-[0.35em] text-sm">
          Creative Process
        </p>

        <h2 className="font-display text-3xl mt-4">
          From Vision to Graphite
        </h2>

        <div className="relative mt-20">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-gold/20"></div>

          <div className="space-y-10">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gold text-black font-bold flex items-center justify-center">
                  {step.number}
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="font-display text-2xl text-gold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-cream/70 leading-7">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}