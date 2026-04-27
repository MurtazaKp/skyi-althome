'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/explore' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActivePath = (path: string) => pathname === path;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/8 rounded-full px-5 lg:px-6 py-2.5 flex items-center justify-between shadow-2xl">
            <Link
              href="/"
              className="text-base lg:text-lg font-semibold tracking-tight text-[#fafafa] hover:opacity-80 transition-opacity px-2"
            >
              AltHome
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActivePath(item.path)
                      ? 'text-[#fafafa]'
                      : 'text-[#737373] hover:text-[#fafafa]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-[#fafafa] text-[#0a0a0a] px-5 py-2 text-sm rounded-full hover:bg-white transition-all shadow-lg"
              >
                Get Started
              </Link>
            </div>

            <button
              className="md:hidden p-1 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#fafafa]" />
              ) : (
                <Menu className="w-5 h-5 text-[#fafafa]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[320px] bg-[#141414] shadow-2xl z-40 md:hidden border-l border-white/8"
          >
            <div className="flex flex-col h-full pt-24 px-8">
              <nav className="flex flex-col space-y-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={`text-left text-lg transition-colors ${
                      isActivePath(item.path) ? 'text-[#fafafa]' : 'text-[#737373] hover:text-[#fafafa]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="bg-[#fafafa] text-[#0a0a0a] px-6 py-3 text-sm rounded-full hover:bg-white transition-all text-center mt-4"
                >
                  Get Started
                </Link>
              </nav>

              <div className="mt-auto pb-8 text-sm text-[#737373]">
                <p>© 2026 AltHome</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
