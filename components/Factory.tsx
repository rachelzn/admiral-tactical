'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Factory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      src: 'https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?w=900&q=80&auto=format&fit=crop',
      label: 'Lantai Produksi',
      span: 'col-span-2 row-span-1',
    },
    {
      src: 'https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?w=600&q=80&auto=format&fit=crop',
      label: 'Proses Jahit',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.pexels.com/photos/3962284/pexels-photo-3962284.jpeg?w=600&q=80&auto=format&fit=crop',
      label: 'Quality Control',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?w=600&q=80&auto=format&fit=crop',
      label: 'Seleksi Material',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=900&q=80&auto=format&fit=crop',
      label: 'Proses Packing',
      span: 'col-span-2 row-span-1',
    },
  ];

  return (
    <section id="factory" className="py-24 bg-background">
      <div className="container" ref={ref}>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="grid grid-cols-3 grid-rows-2 gap-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-md overflow-hidden aspect-video group relative ${img.span}`}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity font-syne">
                {img.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
