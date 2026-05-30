'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=1800&q=90&auto=format&fit=crop"
          alt="Tactical footwear manufacturing"
          className="w-full h-full object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/75" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/85 px-3.5 py-1.5 rounded-pill text-xs font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse-dot" />
            Produsen Sepatu Tactical — Bandung, Indonesia
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne text-5xl md:text-7xl font-bold text-white max-w-3xl mb-6 leading-tight"
        >
          Produksi Sepatu Tactical dengan <span className="text-accent">Kapasitas Produksi Besar dan Pengiriman Nasional</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/70 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Produksi sepatu tactical, PDL, dan custom footwear untuk instansi, perusahaan, dan kebutuhan pengadaan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start gap-3 mb-14"
        >
          <a
            href="#custom"
            className="inline-flex items-center gap-2 bg-white text-olive-600 px-7 py-3.5 rounded-pill font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Request Custom Design
          </a>
          <a
            href="https://wa.me/6285121330886?text=Halo%2C%20saya%20ingin%20menanyakan%20pengadaan%20sepatu%20tactical."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/12 text-white px-7 py-3.5 rounded-pill font-medium border border-white/25 backdrop-blur-md transition-all hover:bg-white/20 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hubungi via WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          {[
            'Berbasis di Bandung',
            'Menerima Custom Design',
            'Siap Produksi Massal',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 text-xs">
              <div className="w-5 h-5 rounded-full bg-olive-600 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3 stroke-white" strokeWidth="1.5">
                  <path d="M2 5L4.5 7.5L8.5 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
