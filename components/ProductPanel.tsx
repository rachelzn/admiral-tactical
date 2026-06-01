'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package } from 'lucide-react';
import { Product } from '@/data/products';

const SPEC_LABELS: Record<string, string> = {
  material: 'Material Upper',
  sole: 'Sol',
  colors: 'Warna',
  sizes: 'Ukuran',
  type: 'Tipe Produksi',
  branding: 'Custom Branding',
  moq: 'MOQ',
};

interface ProductPanelProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductPanel({ product, onClose }: ProductPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  const waMessage = product
    ? `Halo%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}%20(${product.sku}).%20Boleh%20saya%20minta%20info%20lebih%20lanjut%3F`
    : '';

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-over Panel */}
          <motion.div
            key="panel"
            ref={panelRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-2 text-xs font-bold text-olive-600 uppercase tracking-wider">
                <Package className="w-4 h-4" />
                {product.category}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-surface transition-colors text-text-tertiary hover:text-foreground"
                aria-label="Tutup panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Product Image */}
              <div className="aspect-video overflow-hidden bg-surface flex-shrink-0 relative">
                {/* Fallback placeholder shown if image 404s */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface text-text-tertiary text-xs select-none">
                  <Package className="w-12 h-12 opacity-20" />
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="px-6 py-6">
                {/* Title */}
                <h2 className="font-syne text-2xl font-bold mb-1">{product.name}</h2>
                <p className="text-xs text-text-tertiary mb-4 font-mono">SKU: {product.sku} · Proyek {product.year}</p>
                <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs table */}
                <h3 className="font-syne font-bold text-sm uppercase tracking-wider text-text-tertiary mb-3">
                  Spesifikasi Teknis
                </h3>
                <div className="border border-border rounded-lg overflow-hidden mb-6">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <tr key={key} className={i % 2 === 0 ? 'bg-background' : 'bg-surface'}>
                          <td className="px-4 py-3 text-xs font-medium text-text-tertiary w-2/5">
                            {SPEC_LABELS[key] ?? key}
                          </td>
                          <td className="px-4 py-3 text-xs font-semibold text-foreground">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* CTA */}
                <div className="bg-accent-bg border border-olive-200 rounded-lg p-5">
                  <p className="text-sm font-medium mb-1">Tertarik dengan produk ini?</p>
                  <p className="text-xs text-text-tertiary mb-4">
                    Hubungi tim kami untuk penawaran, spesifikasi detail, atau konsultasi pengadaan.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/6285121330886?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center text-sm"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Hubungi via WhatsApp
                    </a>
                    <a href="#custom" onClick={onClose} className="btn-secondary justify-center text-sm">
                      Request Custom Design
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
