'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { products, getProductsByCategory } from '@/data/products';
import Link from 'next/link';

const categories = ['all', 'pdl', 'tactical', 'safety', 'custom', 'pengadaan'];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Portofolio</div>
          <h2 className="text-4xl font-bold mb-4">Produk Kami</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light">
            Berikut sebagian proyek yang telah kami selesaikan untuk berbagai instansi dan perusahaan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-pill text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-olive-600 text-white border-olive-600'
                  : 'bg-white text-text-secondary border border-border hover:border-text-tertiary'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat === 'pdl' ? 'PDL' : cat === 'tactical' ? 'Tactical Boots' : cat === 'safety' ? 'Safety Shoes' : cat === 'custom' ? 'Custom' : 'Pengadaan'}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="bg-white border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                  <div className="aspect-video overflow-hidden bg-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-olive-600 uppercase tracking-wider mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-xs text-text-tertiary mb-4">Proyek {product.year}</p>
                    <div className="flex items-center gap-1 text-olive-600 text-xs font-medium">
                      Lihat Detail
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
