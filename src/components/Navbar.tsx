import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
          : 'bg-white border-b border-neutral-200/70'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          aria-label="Manoj C - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-white font-mono font-bold text-sm tracking-tight group-hover:bg-[#31AAA9] transition-colors">
            MC
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[#111111] flex items-center">
              MANOJ C<span className="text-[#31AAA9] font-black text-lg leading-none ml-0.5">.</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Software Developer</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
                  isActive
                    ? 'text-[#31AAA9]'
                    : 'text-neutral-600 hover:text-[#111111] hover:bg-neutral-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#31AAA9] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          <div className="h-5 w-px bg-neutral-200 mx-2" />

          {/* Contact quick CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#31AAA9] hover:bg-[#269695] rounded-lg transition-all shadow-sm hover:shadow"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navItems.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ${
                      isActive
                        ? 'text-[#31AAA9] bg-[#F5F7F7] font-bold'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9]" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#31AAA9] text-white text-sm font-semibold shadow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}