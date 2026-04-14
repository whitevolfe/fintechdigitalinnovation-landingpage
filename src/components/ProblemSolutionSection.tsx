import { motion } from "framer-motion";
import { XCircle, CheckCircle, Zap, BarChart3, Target } from "lucide-react";

const problems = [
  { text: "Most business websites don't generate leads", icon: XCircle },
  { text: "Slow websites lose customers every single day", icon: XCircle },
  { text: "No tracking means no growth — you're flying blind", icon: XCircle },
];

const solutions = [
  { text: "Lightning-fast websites that load in under 1 second", icon: Zap },
  { text: "Built-in lead capture system via WhatsApp & forms", icon: Target },
  { text: "SEO + analytics tracking for measurable growth", icon: BarChart3 },
];

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Why Most Websites Fail
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            The Problem & Our Solution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">❌ The Problem</h3>
            <div className="space-y-5">
              {problems.map((p) => (
                <div key={p.text} className="flex items-start gap-4">
                  <p.icon className="size-5 text-destructive mt-0.5 shrink-0" />
                  <p className="text-foreground/80">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gold/5 rounded-2xl p-8 border border-gold/20"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">✅ Our Solution</h3>
            <div className="space-y-5">
              {solutions.map((s) => (
                <div key={s.text} className="flex items-start gap-4">
                  <CheckCircle className="size-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-foreground/80">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
