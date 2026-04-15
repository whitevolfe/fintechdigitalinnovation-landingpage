import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import fintechLogo from '@/assets/fintech-digital-innologo.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Results', href: '#results' },
    { label: 'Services', href: '#offer' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#cta' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link to='/' className='flex items-center space-x-3'>
            <img
              src={fintechLogo}
              alt='Fintech Digital Innovation'
              className='h-15 w-auto'
            />
            <span className='text-xl font-bold text-primary-foreground tracking-tight'>
              <span className='text-gold'>Fintech Digital Innovation</span>
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
            <Button variant='gold' size='sm' asChild>
              <a
                href='https://wa.me/94741383098'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MessageCircle className='size-4' />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-primary-foreground'
          >
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden pb-4 space-y-3'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='block text-sm text-primary-foreground/70 hover:text-gold transition-colors py-2'
              >
                {link.label}
              </a>
            ))}
            <Button variant='gold' size='sm' className='w-full' asChild>
              <a
                href='https://wa.me/94741383098'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MessageCircle className='size-4' />
                WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
