'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState([0, 0, 0, 100]);

  useEffect(() => {
    if (!isInView) return;

    const targets = [10, 150, 20000, 100];
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
    { num: counts[0], suffix: '+', label: 'Tahun Beroperasi' },
    { num: counts[1], suffix: '+', label: 'Proyek Diselesaikan' },
    { num: counts[2], suffix: '+', label: 'Pasang Diproduksi' },
    { num: counts[3], suffix: '%', label: 'Mendukung Custom Design' },
  ];

  return (
    <section id="metrics" className="py-24 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16 reveal"
        >
          <div className="section-label justify-center">Rekam Jejak</div>
          <h2 className="text-4xl font-bold mb-0">Angka yang Berbicara</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="bg-background p-12 text-center hover:after:opacity-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-olive-600 after:opacity-0 after:transition-opacity"
            >
              <div className="font-syne text-4xl md:text-5xl font-bold text-olive-600 mb-3">
                {metric.num.toLocaleString('id')}
                {metric.suffix}
              </div>
              <div className="text-sm text-text-secondary">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
