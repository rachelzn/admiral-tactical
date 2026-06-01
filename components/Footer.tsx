'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
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
              <span className="font-syne font-bold text-base">Admiral Tactical</span>
            </div>
            <p className="text-sm text-white/40 mb-6 font-light max-w-xs leading-relaxed">
              Produsen sepatu tactical dan custom footwear terpercaya untuk pengadaan skala besar. Berbasis di Bandung,
              Indonesia.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-sm bg-white/7 flex items-center justify-center transition-colors hover:bg-white/12"
                >
                  <Icon className="w-4 h-4 text-white/50" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {([
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Fasilitas Pabrik', href: '#factory' },
                { label: 'Keunggulan', href: '#why' },
                { label: 'Lokasi', href: '#location' },
              ] as { label: string; href: string }[]).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/50 hover:text-white/85 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {([
                { label: 'Portofolio Produk', href: '#products' },
                { label: 'Custom Design', href: '#custom' },
                { label: 'Proses Pemesanan', href: '#hero' },
              ] as { label: string; href: string }[]).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/50 hover:text-white/85 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">Kontak</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/6285121330886" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white/85 transition-colors">
                  +62 851-2133-0886
                </a>
              </li>
              <li>
                <a href="mailto:admiraltacticalwear@gmail.com" className="text-sm text-white/50 hover:text-white/85 transition-colors">
                  admiraltacticalwear@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm text-white/50">Jl. Gn. Puntang Kp Sirna Galih No.KM 29, Bandung</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-xs text-white/25 font-light">© 2025 Admiral Tactical. Hak cipta dilindungi.</span>
          <span className="text-xs text-olive-400 font-medium">Bandung, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
