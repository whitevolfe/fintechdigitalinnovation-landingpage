import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Zap } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "120+",
    label: "Leads generated in 30 days for a local business",
  },
  {
    icon: Users,
    metric: "3x",
    label: "Increase in website conversions after redesign",
  },
  {
    icon: Zap,
    metric: "0.8s",
    label: "Average page load time across all client sites",
  },
  {
    icon: Star,
    metric: "5.0",
    label: "Average client rating from 50+ projects",
  },
];

export function TrustSection() {
  return (
    <section id="results" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Proven Results
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Real Results. Real Clients. Real Growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-4">
                <result.icon className="size-6" />
              </div>
              <div className="text-3xl font-bold text-foreground">{result.metric}</div>
              <p className="mt-2 text-sm text-muted-foreground">{result.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-card rounded-2xl p-8 border border-border"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Our leads tripled within the first month. The website Azeem built is a complete game-changer.",
                name: "Sarah K.",
                role: "Restaurant Owner",
              },
              {
                quote: "Fast, beautiful, and it actually ranks on Google. Best investment we made for our business.",
                name: "David M.",
                role: "E-commerce Founder",
              },
              {
                quote: "Professional from start to finish. The WhatsApp integration alone brought us 40+ inquiries.",
                name: "Nimal P.",
                role: "Real Estate Agent",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
