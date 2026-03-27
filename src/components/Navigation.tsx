'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work / CV', href: '/work/cv' },
  { name: 'Life / Wedding', href: '/life/wedding' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[60] w-full bg-white/50 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-black tracking-tighter transition-all group-hover:tracking-normal group-hover:text-blue-600">
            CHIENBANG.CHEN
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:text-blue-600 ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center">
          <Link
            href="/work/cv"
            className="hidden sm:block border-2 border-gray-900 text-gray-900 px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
