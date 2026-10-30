import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer({
  profile,
}: {
  profile: {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elPosition = el.getBoundingClientRect().top;
      const offset = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">

          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tight group-hover:bg-[#31AAA9] transition-colors">
                MC
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
                MANOJ C<span className="text-[#31AAA9] font-black text-2xl leading-none ml-0.5">.</span>
              </span>
            </button>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Software Developer focused on building modern web applications and cross-platform mobile experiences with React.js, React Native, and TypeScript.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#31AAA9]" />
              <span>Available for opportunities · Bengaluru, Ahmedabad, Mangalore India</span>
            </div>
          </div>

          {/* Quick Navigation (col-span-4) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-neutral-400 hover:text-[#31AAA9] text-left transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact Channels (col-span-3) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Connect Directly
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-[#31AAA9] transition-colors"
                >
                  <GithubIcon size={14} className="text-[#31AAA9]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-[#31AAA9] transition-colors"
                >
                  <LinkedinIcon size={14} className="text-[#31AAA9]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-[#31AAA9] transition-colors"
                >
                  <Mail size={14} className="text-[#31AAA9]" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-[#31AAA9] transition-colors"
                >
                  <Phone size={14} className="text-[#31AAA9]" />
                  <span>+91 {profile.phone}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Manoj C. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#31AAA9] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="text-[#31AAA9]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
