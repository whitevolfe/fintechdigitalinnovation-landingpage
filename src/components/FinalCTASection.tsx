import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section id='cta' className='py-24 bg-primary relative overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className='text-xs font-semibold tracking-widest uppercase text-gold'>
            Let's Get Started
          </span>
          <h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight'>
            Let's Build a Website That Brings You{' '}
            <span className='text-gold'>Clients</span>
          </h2>
          <p className='mt-6 text-primary-foreground/70 text-lg max-w-xl mx-auto'>
            Limited client slots available. Book your free strategy call today
            and let's discuss how we can grow your business.
          </p>

          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button variant='hero' size='xl' asChild>
              <a
                href='https://calendly.com'
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
          </div>

          <p className='mt-8 text-xs text-primary-foreground/40'>
            Free consultation • No obligation • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
