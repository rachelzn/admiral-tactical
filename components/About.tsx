'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Briefcase, Shield } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Home,
      title: 'Pabrik Sendiri di Bandung',
      desc: 'Produksi langsung, tanpa perantara',
    },
    {
      icon: Briefcase,
      title: 'Pengalaman Pengadaan Pemerintah',
      desc: 'Terbiasa dengan proses tender dan LPSE',
    },
    {
      icon: Shield,
      title: 'Quality Control Ketat',
      desc: 'Setiap pasang diperiksa sebelum pengiriman',
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden aspect-[4/5] bg-card">
              <img
                src="https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?w=900&q=85&auto=format&fit=crop"
                alt="Admiral Tactical workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-md p-4 flex items-center justify-between">
              <div className="text-center">
                <div className="font-syne font-bold text-xl text-olive-600">Bdg</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary">Bandung</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="font-syne font-bold text-xl text-olive-600">B2B</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary">Fokus Pengadaan</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="font-syne font-bold text-xl text-olive-600">OEM</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary">Custom Branding</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="section-label">Profil Perusahaan</div>
            <h2 className="text-4xl font-bold mb-8">Pabrik Sepatu Tactical Lokal Terbesar di Bandung Sejak 2016</h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-text-secondary font-light leading-relaxed">
                Admiral Tactical adalah produsen sepatu tactical yang berbasis di Bandung, Indonesia.
                Kami berfokus pada produksi sepatu untuk kebutuhan institusi, pemerintah, dan perusahaan swasta.
              </p>
              <p className="text-lg text-text-secondary font-light leading-relaxed">
                Dengan kapasitas produksi 5.000 – 10.000 pasang per bulan serta lini produksi yang dapat disesuaikan,
                kami siap untuk menangani proyek kecil, menengah, hingga atas.
              </p>
              <p className="text-lg text-text-secondary font-light leading-relaxed">
                Setiap produk dirancang dengan mempertimbangkan standar kualitas, fungsi, dan kebutuhan spesifik klien
                — bukan produk massal dari rak toko.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex gap-3 p-4 bg-white border border-border rounded-md hover:border-olive-600 transition-colors"
                >
                  <div className="w-9 h-9 bg-accent-bg rounded-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <strong className="text-sm block mb-0.5">{feature.title}</strong>
                    <span className="text-xs text-text-tertiary">{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
