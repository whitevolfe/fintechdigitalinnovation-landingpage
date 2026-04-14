import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-card rounded-3xl p-10 sm:p-14 border border-gold/20 shadow-lg"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
            <ShieldCheck className="size-8 text-gold" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Our Guarantee
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            If you're not satisfied with the design, we revise until you are. We don't just build websites — we optimize for real, measurable results.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Unlimited Revisions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Results-Focused
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              100% Satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
