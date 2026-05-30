'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-border py-3.5'
          : 'bg-white py-5'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-olive-600 rounded-sm flex items-center justify-center">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 stroke-white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                <path d="M8 2L13 6V14H3V6L8 2Z" />
                <path d="M6 14V10H10V14" />
              </svg>
            </div>
            <span className="font-syne font-bold text-lg tracking-tighter">Admiral Tactical</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              <li>
                <a href="#about" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#factory" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                  Pabrik
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#custom" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#location" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/6285121330886?text=Halo%20Admiral%20Tactical%2C%20saya%20ingin%20menanyakan%20mengenai%20pengadaan%20sepatu%20tactical."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-olive-600 text-white px-5 py-2.5 rounded-pill text-xs font-medium transition-colors hover:bg-olive-800"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
