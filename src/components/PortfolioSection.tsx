import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Luxe Dining Co.",
    industry: "Restaurant",
    goal: "Increase table reservations",
    result: "85% more bookings in 60 days",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "UrbanFit Studio",
    industry: "Fitness",
    goal: "Generate membership leads",
    result: "120+ leads in first month",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "GreenLeaf Realty",
    industry: "Real Estate",
    goal: "Capture property inquiries",
    result: "3x increase in qualified leads",
    color: "from-whatsapp/20 to-whatsapp/5",
  },
  {
    title: "Swift Logistics",
    industry: "Transport & Logistics",
    goal: "Build credibility & get quotes",
    result: "200% more quote requests",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "Bloom Beauty Spa",
    industry: "Beauty & Wellness",
    goal: "Online booking system",
    result: "60% appointments via website",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "TechVault Solutions",
    industry: "IT Services",
    goal: "Lead generation for B2B",
    result: "45 enterprise leads/month",
    color: "from-whatsapp/20 to-whatsapp/5",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Websites That Deliver Results
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="inline-block text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full mb-3">
                  {project.industry}
                </span>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Goal:</strong> {project.goal}
                </p>
                <p className="text-sm font-semibold text-gold">
                  ✓ {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
