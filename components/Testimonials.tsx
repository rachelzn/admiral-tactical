'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: 'Admiral Tactical berhasil memenuhi pesanan kami tepat waktu dengan kualitas yang konsisten. Proses komunikasi yang profesional dan transparan dari awal hingga selesai.',
    org: 'Polda Jawa Barat',
    role: 'Pejabat Pengadaan',
    initials: 'POL',
  },
  {
    quote: 'Kami sudah tiga kali menggunakan Admiral Tactical untuk kebutuhan pengadaan sepatu dinas. Kualitas selalu sesuai spesifikasi dan pengiriman tepat jadwal.',
    org: 'Dinas Pemadam Kota',
    role: 'Kepala Bagian Logistik',
    initials: 'PMK',
  },
  {
    quote: 'Sebagai vendor pengadaan, kami selalu merekomendasikan Admiral Tactical karena kemampuan mereka menangani proyek besar dengan standar kualitas yang tidak pernah mengecewakan.',
    org: 'PT Sejahtera Procurement',
    role: 'Direktur Operasional',
    initials: 'PT',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Testimoni</div>
          <h2 className="text-4xl font-bold">Dipercaya Berbagai Instansi</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-lg p-8"
            >
              <p className="text-base text-text-secondary italic font-light leading-relaxed mb-8">&ldquo;{testi.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-bold text-white text-xs">{testi.initials}</span>
                </div>
                <div>
                  <div className="font-syne font-bold text-xs text-foreground block">{testi.org}</div>
                  <div className="text-xs text-text-tertiary">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
