'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Kirim Desain', desc: 'Sertakan spesifikasi teknis, referensi, atau sketsa desain Anda' },
  { num: '02', title: 'Konsultasi Spesifikasi', desc: 'Tim kami akan mendiskusikan material, ukuran, dan kebutuhan khusus' },
  { num: '03', title: 'Produksi & Sampling', desc: 'Sampel pertama disiapkan untuk persetujuan sebelum produksi massal' },
  { num: '04', title: 'Pengiriman Tepat Waktu', desc: 'Produk dikirim sesuai jadwal dengan dokumentasi lengkap' },
];

export default function CustomDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="custom" className="py-24 bg-charcoal">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-label text-accent">Custom Design</div>
            <h2 className="text-4xl font-bold text-white mb-6">Sudah Punya Desain Sendiri?</h2>
            <p className="text-lg text-white/55 mb-12 font-light leading-relaxed">
              Kami siap membantu memproduksi sesuai kebutuhan proyek Anda. Dari desain teknis hingga produksi massal.
            </p>

            <div className="space-y-0 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5 py-5 border-b border-white/8 last:border-0"
                >
                  <span className="text-xs font-bold text-olive-400 w-6 flex-shrink-0 pt-0.5">{step.num}</span>
                  <div>
                    <strong className="text-white text-base block mb-1">{step.title}</strong>
                    <span className="text-white/45 text-xs">{step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              href="https://wa.me/6285121330886?text=Halo%2C%20saya%20ingin%20mengirimkan%20desain%20untuk%20produksi%20custom."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-olive-600 text-white px-7 py-3.5 rounded-pill font-medium text-sm transition-all hover:bg-olive-800 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Kirim Desain Anda
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 rounded-md overflow-hidden aspect-video bg-card">
              <img
                src="https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?w=900&q=85&auto=format&fit=crop"
                alt="Tactical boot design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden aspect-square bg-card">
              <img
                src="https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?w=600&q=80&auto=format&fit=crop"
                alt="Material selection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden aspect-square bg-card">
              <img
                src="https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?w=600&q=80&auto=format&fit=crop"
                alt="Prototype development"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
