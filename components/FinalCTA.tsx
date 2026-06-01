'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0d1008' }}
    >
      {/* ── Background decoration: gradient orbs ─────────────────────── */}
      {/* Top-left olive blob */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #6b7c2e 0%, transparent 70%)' }}
      />
      {/* Bottom-right amber blob */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[480px] h-[480px] rounded-full opacity-35 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #a07b30 0%, transparent 70%)' }}
      />
      {/* Center subtle warm glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #8a9a3a 0%, transparent 65%)' }}
      />

      {/* ── Subtle grid texture ───────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: 'rgba(139, 159, 54, 0.45)',
              color: '#b5c45a',
              background: 'rgba(139, 159, 54, 0.1)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5c45a] animate-pulse" />
            Mulai Proyek Anda
          </motion.div>

          {/* Headline — solid white, fully readable */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Mari Diskusikan{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c8d96a 0%, #a07b30 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kebutuhan Produksi
            </span>{' '}
            Sepatu Anda
          </motion.h2>

          {/* Subtext — white/80 on dark = clearly readable */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-lg text-white/75 font-light mb-12 leading-relaxed"
          >
            Kami siap memberikan konsultasi dan penawaran terbaik untuk proyek Anda.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {/* Primary — olive gradient */}
            <a
              href="https://wa.me/6285121330886?text=Halo%20Admiral%20Tactical%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20pengadaan%20sepatu%20tactical."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-pill font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #6b7c2e 0%, #4e5c1e 100%)',
                boxShadow: '0 0 0 1px rgba(139,159,54,0.3)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi via WhatsApp
            </a>

            {/* Secondary — glass */}
            <a
              href="#custom"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-pill font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Request Custom Design
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
