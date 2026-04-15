import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AquareefAquarium.',
    industry: 'Aquarium Services',
    visit: 'www.aquareefaquarium.com',
    videoId: 'ccmMMPwFiuI',
    result: '85% more bookings in 60 days',
  },
  {
    title: 'Altitude Global (pvt)ltd',
    industry: 'recruitment agency',
    visit: 'www.altitudegroup.io',
    videoId: 'ql1uCOOahF4',
    result: '120+ leads in first month',
  },
  {
    title: 'LIFTLAB Fitness',
    industry: 'WHEY PROTEIN supplement',
    visit: 'www.liftlab.lk',
    videoId: 'JsruZ4wsnwU',
    result: '3x increase in qualified leads',
  },
  {
    title: 'SHANNU TRAVELS (PVT)LTD',
    industry: 'Travels & Tourism',
    visit: 'www.shannutravels.com',
    videoId: 'gbjCORRe12w',
    result: '200% more quote requests',
  },
  {
    title: 'MY PLAN ARCHITECTURE',
    industry: 'ARCHITECTURE & INTERIOR DESIGN',
    visit: 'modern-architechture-srilanka.vercel.app',
    videoId: 'eqwvOPWgN8Q',
    result: '60% appointments via website',
  },
  {
    title: 'RSS JAPANESE EXELLENCE (PVT)LTD',
    industry: 'Japanese language training',
    visit: 'www.rss-company.vercel.app',
    videoId: 'WpCth_g-HBk',
    result: '45 enterprise leads/month',
  },
];

export function PortfolioSection() {
  return (
    <section id='portfolio' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <span className='text-xs font-semibold tracking-widest uppercase text-gold'>
            Portfolio
          </span>
          <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-foreground'>
            Websites That Deliver Results
          </h2>
        </motion.div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className='group bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 hover:shadow-lg transition-all duration-300'
            >
              {/* Video Section */}
              {project.videoId && (
                <div className='relative h-40 overflow-hidden'>
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.videoId}&modestbranding=1`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    className='w-full h-full pointer-events-none'
                  />
                  {/* Overlay for premium look */}
                  <div className='absolute inset-0 bg-black/20'></div>
                </div>
              )}

              {/* Content */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-bold text-foreground'>{project.title}</h3>
                  <ExternalLink className='size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>

                <span className='inline-block text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full mb-3'>
                  {project.industry}
                </span>

                <p className='text-sm text-muted-foreground mb-2'>
                  <strong>Visit:</strong>{' '}
                  <a
                    href={`https://${project.visit}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                  >
                    {project.visit}
                  </a>
                </p>

                {project.videoId && (
                  <p className='text-sm text-muted-foreground mb-2'>
                    <strong>Video:</strong>{' '}
                    <a
                      href={`https://youtu.be/${project.videoId}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gold hover:underline'
                    >
                      Watch Demo
                    </a>
                  </p>
                )}

                <p className='text-sm font-semibold text-gold'>
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
