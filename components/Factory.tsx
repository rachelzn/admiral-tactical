'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

// Reel ID dari URL: instagram.com/reel/DQT-2gsj4Wj/
const REEL_EMBED_URL = 'https://www.instagram.com/reel/DQT-2gsj4Wj/embed/';

const photos = [
  {
    src: 'https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?w=1200&q=80&auto=format&fit=crop',
    label: 'Lantai Produksi',
  },
  {
    src: 'https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?w=800&q=80&auto=format&fit=crop',
    label: 'Proses Jahit',
  },
  {
    src: 'https://images.pexels.com/photos/3962284/pexels-photo-3962284.jpeg?w=800&q=80&auto=format&fit=crop',
    label: 'Quality Control',
  },
];

function PhotoCard({
  src,
  label,
  className = '',
  delay = 0,
}: {
  src: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay }}
      className={`rounded-xl overflow-hidden group relative ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-3 left-4 text-white text-sm font-medium font-syne opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.div>
  );
}

export default function Factory() {
  const ref = useRef(null);

  return (
    <section id="factory" className="py-24 bg-background">
      <div className="container" ref={ref}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="section-label"
            >
              Fasilitas Produksi
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl font-bold max-w-lg"
            >
              Lihat Proses Produksi Kami
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            href="https://wa.me/6285121330886?text=Halo%2C%20saya%20ingin%20menjadwalkan%20survey%20pabrik%20Admiral%20Tactical."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Jadwalkan Survey Pabrik
          </motion.a>
        </div>

        {/* ── Desktop: editorial asymmetric ────────────────────────────────
            ┌──────────────────────────────┬─────────────┐
            │  Photo 1  (besar, flex-1)    │             │
            ├────────────────┬─────────────┤   Reels     │
            │   Photo 2      │   Photo 3   │  (portrait) │
            └────────────────┴─────────────┴─────────────┘
        ──────────────────────────────────────────────────────────────── */}
        <div className="hidden md:flex gap-3" style={{ height: '560px' }}>

          {/* Left: 2-row photo stack */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            {/* Photo 1 — big */}
            <PhotoCard
              src={photos[0].src}
              label={photos[0].label}
              className="flex-1"
              delay={0}
            />
            {/* Photos 2 & 3 — row */}
            <div className="flex gap-3" style={{ height: '180px' }}>
              <PhotoCard
                src={photos[1].src}
                label={photos[1].label}
                className="flex-1"
                delay={0.12}
              />
              <PhotoCard
                src={photos[2].src}
                label={photos[2].label}
                className="flex-1"
                delay={0.2}
              />
            </div>
          </div>

          {/* Right: Reels portrait — fixed width, full height */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex-shrink-0 rounded-xl overflow-hidden bg-neutral-950 relative"
            style={{ width: '260px' }}
          >
            <iframe
              src={REEL_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              scrolling="no"
              allowTransparency
              allowFullScreen
              title="Instagram Reels Admiral Tactical"
            />
          </motion.div>
        </div>

        {/* ── Mobile: stacked ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Photo 1 */}
          <PhotoCard src={photos[0].src} label={photos[0].label} className="aspect-video" delay={0} />

          {/* Reels — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto rounded-xl overflow-hidden bg-neutral-950 relative"
            style={{ width: '260px', height: '462px' }}
          >
            <iframe
              src={REEL_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              scrolling="no"
              allowTransparency
              allowFullScreen
              title="Instagram Reels Admiral Tactical"
            />
          </motion.div>

          {/* Photos 2 & 3 */}
          <div className="grid grid-cols-2 gap-3">
            {photos.slice(1).map((photo, i) => (
              <PhotoCard
                key={photo.label}
                src={photo.src}
                label={photo.label}
                className="aspect-[4/3]"
                delay={0.05 * i}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
