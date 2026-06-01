'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

// Reel ID dari URL: instagram.com/reel/DQT-2gsj4Wj/
const REEL_EMBED_URL = 'https://www.instagram.com/reel/DQT-2gsj4Wj/embed/';

const photos = [
  {
    src: '/factory/pola.png',
    label: 'Pembuatan Pola',
  },
  {
    src: '/factory/cutting.png',
    label: 'Cutting',
  },
  {
    src: '/factory/assembling.png',
    label: 'Assembling',
  },
  {
    src: '/factory/pemasangan-sol.png',
    label: 'Pemasangan Sol',
  },
  {
    src: '/factory/quality-control.png',
    label: 'Quality Control',
  },
  {
    src: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?w=800&q=80&auto=format&fit=crop',
    label: 'Finishing',
  },
  {
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?w=800&q=80&auto=format&fit=crop',
    label: 'Inspeksi Akhir',
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

        {/* ── Desktop Layout ────────────────────────────────────────────────
            Left: 3-col photo grid (7 photos in 3 rows)
            Right: Instagram Reel (portrait, fixed width)
            ─────────────────────────────────────────────────────────────── */}
        <div className="hidden md:flex gap-3" style={{ height: '600px' }}>

          {/* Left: Photo grid — 3 cols × flexible rows */}
          <div className="flex-1 min-w-0 grid gap-3" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
            {/* Row 1: photos 0, 1, 2 */}
            <PhotoCard src={photos[0].src} label={photos[0].label} className="col-span-2" delay={0} />
            <PhotoCard src={photos[1].src} label={photos[1].label} delay={0.08} />

            {/* Row 2: photos 2, 3, 4 */}
            <PhotoCard src={photos[2].src} label={photos[2].label} delay={0.14} />
            <PhotoCard src={photos[3].src} label={photos[3].label} delay={0.2} />
            <PhotoCard src={photos[4].src} label={photos[4].label} delay={0.26} />

            {/* Row 3: photos 5, 6 */}
            <PhotoCard src={photos[5].src} label={photos[5].label} delay={0.32} />
            <PhotoCard src={photos[6].src} label={photos[6].label} className="col-span-2" delay={0.38} />
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
              allowFullScreen
              title="Instagram Reels Admiral Tactical"
            />
          </motion.div>
        </div>

        {/* ── Mobile: stacked ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Top feature photo */}
          <PhotoCard src={photos[0].src} label={photos[0].label} className="aspect-video" delay={0} />

          {/* 2-col grid: photos 1–4 */}
          <div className="grid grid-cols-2 gap-3">
            {photos.slice(1, 5).map((photo, i) => (
              <PhotoCard
                key={photo.label}
                src={photo.src}
                label={photo.label}
                className="aspect-[4/3]"
                delay={0.05 * i}
              />
            ))}
          </div>

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
              allowFullScreen
              title="Instagram Reels Admiral Tactical"
            />
          </motion.div>

          {/* Last 2 photos */}
          <div className="grid grid-cols-2 gap-3">
            {photos.slice(5).map((photo, i) => (
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
