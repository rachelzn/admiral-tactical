'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Edit3, TrendingUp, Shield, Monitor, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Home,
    title: 'Produksi Langsung',
    desc: 'Pabrik sendiri di Bandung. Tidak ada perantara. Harga lebih kompetitif, kontrol kualitas penuh.',
  },
  {
    icon: Edit3,
    title: 'Custom Design',
    desc: 'Terima desain dari klien, lengkap dengan branding, logo, dan spesifikasi teknis khusus.',
  },
  {
    icon: TrendingUp,
    title: 'Kapasitas Produksi Besar',
    desc: 'Mampu memproduksi puluhan ribu pasang per bulan untuk memenuhi kebutuhan pengadaan skala besar.',
  },
  {
    icon: Shield,
    title: 'Quality Control Ketat',
    desc: 'Setiap produk melalui inspeksi berlapis sebelum dikemas dan dikirim ke klien.',
  },
  {
    icon: Monitor,
    title: 'Pengalaman Pengadaan',
    desc: 'Berpengalaman dalam proses tender pemerintah, LPSE, dan pengadaan korporat B2B.',
  },
  {
    icon: MessageCircle,
    title: 'Respon Cepat',
    desc: 'Tim kami siap merespons pertanyaan dan permintaan penawaran dalam waktu 24 jam kerja.',
  },
];

export default function WhyAdmiral() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="why" className="py-24 bg-surface" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Keunggulan</div>
          <h2 className="text-4xl font-bold mb-3">Mengapa Admiral Tactical</h2>
          <p className="text-lg text-text-secondary max-w-lg mx-auto font-light">
            Enam alasan mengapa klien kami terus mempercayakan pengadaan mereka kepada kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white border border-border rounded-lg p-8 hover:border-olive-600 hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 bg-accent-bg rounded-md flex items-center justify-center mb-5">
                <reason.icon className="w-5.5 h-5.5 text-olive-600" />
              </div>
              <h3 className="font-syne font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
