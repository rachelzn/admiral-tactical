'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [counts, setCounts] = useState([0, 0, 0, 100]);

  useEffect(() => {
    if (!isInView) return;

    const targets = [9, 10000, 500000, 100];
    const intervals: (NodeJS.Timeout | null)[] = targets.map((target, i) => {
      if (i === 3) return null;
      const duration = 1800;
      const step = target / 60;
      let current = 0;

      return setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
        }
        setCounts((prev) => {
          const next = [...prev];
          next[i] = Math.floor(current);
          return next;
        });
      }, duration / 60);
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, [isInView]);

  const metrics = [
    {
      num: counts[0],
      suffix: '',
      label: 'Tahun Beroperasi',
      description: 'Beroperasi sejak 2017',
    },
    {
      num: counts[1],
      suffix: '+',
      label: 'Proyek Diselesaikan',
      description: 'Klien & institusi terpercaya',
    },
    {
      num: counts[2],
      suffix: '+',
      label: 'Pasang Diproduksi',
      description: 'Produk seragam siap pakai',
    },
    {
      num: counts[3],
      suffix: '%',
      label: 'Mendukung Custom Design',
      description: 'Termasuk custom design',
    },
  ];

  return (
    <section id="metrics" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16 reveal"
        >
          <div className="section-label justify-center">Rekam Jejak</div>
          <h2 className="text-4xl font-bold mb-0">Angka yang Berbicara</h2>
        </motion.div>

        {/* ref dipasang di sini agar useInView terpicu saat grid masuk viewport */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="group bg-background p-8 flex flex-col items-center justify-center gap-4 text-center relative overflow-hidden transition-colors duration-300 hover:bg-olive-600/5"
            >
              {/* accent line bottom */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-olive-600 transition-all duration-300 group-hover:w-12" />

              {/* number */}
              <div className="font-syne font-bold text-olive-600 text-4xl leading-none tabular-nums whitespace-nowrap">
                {metric.num.toLocaleString('id')}{metric.suffix}
              </div>

              {/* label + description */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-text-secondary leading-relaxed">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
