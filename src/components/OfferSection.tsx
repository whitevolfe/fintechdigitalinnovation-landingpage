import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Paintbrush,
  Smartphone,
  Zap,
  MessageCircle,
  Search,
  BarChart3,
  Server,
  Crown,
  ArrowRight,
} from 'lucide-react';

const features = [
  { icon: Paintbrush, text: 'Custom modern design tailored to your brand' },
  { icon: Smartphone, text: 'Fully mobile-optimized for every device' },
  { icon: Zap, text: 'Blazing fast loading (Core Web Vitals optimized)' },
  { icon: MessageCircle, text: 'Lead capture system (WhatsApp + smart forms)' },
  { icon: Search, text: 'Full SEO setup (Google ranking + tracking)' },
  { icon: BarChart3, text: 'Analytics integration for real-time insights' },
  { icon: Server, text: 'Lifetime hosting included — Save $500+/year' },
];

export function OfferSection() {
  return (
    <section id='offer' className='py-20 bg-surface'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <span className='text-xs font-semibold tracking-widest uppercase text-gold'>
            What You Get
          </span>
          <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-foreground'>
            Premium Website Package
          </h2>
          <p className='mt-4 text-muted-foreground max-w-xl mx-auto'>
            Everything you need to turn your website into a lead-generating
            machine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative bg-card rounded-3xl border-2 border-gold/30 p-8 sm:p-12 shadow-xl'
        >
          <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
            <div className='inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-1.5 rounded-full text-sm font-bold'>
              <Crown className='size-4' />
              Most Popular
            </div>
          </div>

          <div className='space-y-4 mt-4'>
            {features.map((feature, i) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className='flex items-center gap-4'
              >
                <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 shrink-0'>
                  <feature.icon className='size-5 text-gold' />
                </div>
                <span className='text-foreground'>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <div className='mt-10 p-6 rounded-2xl bg-primary text-center'>
            <p className='text-sm text-primary-foreground/70 uppercase tracking-widest font-medium'>
              Investment
            </p>
            <p className='mt-2 text-3xl font-bold text-primary-foreground'>
              One-Time Payment
            </p>
            <p className='mt-1 text-primary-foreground/70'>
              No monthly costs. No hidden fees. Ever.
            </p>
            <div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-3'>
              <Button variant='hero' size='lg' asChild>
                <a href='#cta'>
                  Get Started
                  <ArrowRight className='size-5' />
                </a>
              </Button>
              <Button variant='whatsapp' size='lg' asChild>
                <a
                  href='https://wa.me/94741383098'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle className='size-5' />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
