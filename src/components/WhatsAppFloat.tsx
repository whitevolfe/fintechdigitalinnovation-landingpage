import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href='https://wa.me/94741383098'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-primary-foreground px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group'
      aria-label='Chat on WhatsApp'
    >
      <MessageCircle className='size-5' />
      <span className='hidden sm:inline text-sm font-semibold'>
        Chat with us
      </span>
    </a>
  );
}
