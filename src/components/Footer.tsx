export function Footer() {
  return (
    <footer className='bg-primary py-10 border-t border-border/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-primary-foreground text-sm'>
            <span className='font-bold text-gold'>
              Fintech Digital Innovation
            </span>{' '}
            — Premium Web Solutions
          </div>
          <div className='text-primary-foreground/40 text-xs'>
            © {new Date().getFullYear()} Fintech Digital Innovation. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
