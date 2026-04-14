import { motion } from "framer-motion";
import { Phone, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Strategy Call",
    description: "We discuss your goals, audience, and what success looks like for your business.",
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "Design & Approval",
    description: "We create a custom design mockup. You approve before we build anything.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "We build your website with speed, SEO, and lead capture baked in from day one.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch + Optimization",
    description: "We launch, set up tracking, and optimize for maximum conversions.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From strategy to launch — complete clarity at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gold mb-2">{step.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <step.icon className="size-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
