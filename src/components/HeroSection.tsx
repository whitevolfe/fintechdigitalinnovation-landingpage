import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className='absolute inset-0 bg-primary/80' />

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 mb-8'
        >
          <span className='text-xs font-medium text-gold tracking-widest uppercase'>
            Only 5 Projects Accepted Monthly
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className='text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight'
        >
          We Build High-Converting Websites That Bring You{' '}
          <span className='text-gold'>Clients</span> — Not Just Traffic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className='mt-6 text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed'
        >
          Premium, fast-loading websites with SEO tracking & lead systems —
          designed to turn visitors into paying customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <Button variant='hero' size='xl' asChild>
            <a href='#cta'>
              Get Free Consultation
              <ArrowRight className='size-5' />
            </a>
          </Button>
          <Button variant='heroOutline' size='xl' asChild>
            <a
              href='https://calendly.com/fintechdigital1/30min'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Calendar className='size-5' />
              Book Strategy Call
            </a>
          </Button>
          <Button variant='whatsapp' size='xl' asChild>
            <a
              href='https://wa.me/94741383098'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircle className='size-5' />
              Message on WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto'
        >
          {[
            { value: '120+', label: 'Leads Generated' },
            { value: '50+', label: 'Websites Built' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className='text-center'>
              <div className='text-2xl sm:text-3xl font-bold text-gold'>
                {stat.value}
              </div>
              <div className='text-xs text-primary-foreground/50 mt-1'>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
