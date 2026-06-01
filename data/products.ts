export interface Product {
  slug: string;
  sku: string;
  name: string;
  category: string;
  year: string;
  image: string;
  description: string;
  specifications: {
    material: string;
    sole: string;
    colors: string;
    sizes: string;
    type: string;
    branding: string;
    moq: string;
  };
}

export const products: Product[] = [
  {
    slug: 'adm-pdl-01',
    sku: 'ADM-PDL-01',
    name: 'PDL Dinas Premium',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-01.png',
    description: 'Sepatu PDL Dinas standar pengadaan pemerintah dengan material Cordura 1000D premium dan sol karet anti-slip. Digunakan oleh berbagai satuan TNI dan Polri di seluruh Indonesia.',
    specifications: {
      material: 'Cordura 1000D Premium',
      sole: 'Karet Anti-slip Double Density',
      colors: 'Hitam, Cokelat Militer',
      sizes: '39 – 46 (Custom tersedia)',
      type: 'Pengadaan Pemerintah',
      branding: 'Logo & Emblem Institusi',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-pdl-02',
    sku: 'ADM-PDL-02',
    name: 'PDL Polri — Standar Dinas',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-02.png',
    description: 'Sepatu PDL resmi untuk satuan Kepolisian Republik Indonesia. Diproduksi sesuai spesifikasi baku Polri dengan material Cordura tahan abrasi dan sol anti-selip lapangan.',
    specifications: {
      material: 'Cordura 900D',
      sole: 'Anti-slip Rubber Compound',
      colors: 'Hitam',
      sizes: '39 – 46',
      type: 'Pengadaan Pemerintah',
      branding: 'Standar Institusi Polri',
      moq: '1000 Pasang',
    },
  },
  {
    slug: 'adm-pdl-03',
    sku: 'ADM-PDL-03',
    name: 'PDL TNI-AD — Lapangan',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-03.png',
    description: 'Sepatu PDL darat untuk satuan TNI Angkatan Darat. Konstruksi high-cut dengan ankle support diperkuat, upper full-grain leather, dan sol Vibram untuk medan berat.',
    specifications: {
      material: 'Full-Grain Leather + Cordura',
      sole: 'Vibram Lug Anti-terrain',
      colors: 'Cokelat TNI, Hitam',
      sizes: '39 – 46',
      type: 'TNI-AD Dinas Lapangan',
      branding: 'Emblem TNI-AD',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-pdl-04',
    sku: 'ADM-PDL-04',
    name: 'PDL TNI-AL — Maritime Boot',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-04.png',
    description: 'Sepatu PDL khusus maritim untuk satuan TNI Angkatan Laut. Dilengkapi lapisan waterproof membrane, anti-korosi pada semua komponen logam, dan sol anti-licin dek kapal.',
    specifications: {
      material: 'Cordura + Waterproof Membrane',
      sole: 'Anti-slip Deck Rubber',
      colors: 'Navy Blue, Hitam',
      sizes: '39 – 46',
      type: 'TNI-AL Maritime',
      branding: 'Emblem TNI-AL',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-pdl-05',
    sku: 'ADM-PDL-05',
    name: 'PDL TNI-AU — Airfield Boot',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-05.png',
    description: 'Sepatu PDL operasional untuk satuan TNI Angkatan Udara. Desain mid-cut ringan dengan material nubuck tahan panas, sol anti-statis, dan insole ergonomis untuk penggunaan panjang.',
    specifications: {
      material: 'Nubuck Heat-resistant',
      sole: 'Anti-static ESD Rubber',
      colors: 'Cokelat Muda, Hitam',
      sizes: '39 – 46',
      type: 'TNI-AU Airfield',
      branding: 'Emblem TNI-AU',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-pdl-06',
    sku: 'ADM-PDL-06',
    name: 'PDL Jungle Boot — Hutan Tropis',
    category: 'Sepatu PDL',
    year: '2024',
    image: '/products/adm-pdl-06.png',
    description: 'Sepatu PDL khusus operasi hutan tropis dengan ventilasi samping berlubang, anti-jamur, anti-gigitan serangga, dan konstruksi quick-dry untuk medan basah dan berlumpur.',
    specifications: {
      material: 'Nylon Mesh + Cordura 500D',
      sole: 'Deep Lug Anti-mud Rubber',
      colors: 'Olive Drab, Cokelat',
      sizes: '39 – 46',
      type: 'Jungle Operations',
      branding: 'Custom Patch tersedia',
      moq: '300 Pasang',
    },
  },
  {
    slug: 'adm-pdl-07',
    sku: 'ADM-PDL-07',
    name: 'PDL BOA System — Dinas Modern',
    category: 'Sepatu PDL',
    year: '2025',
    image: '/products/adm-pdl-07.png',
    description: 'Sepatu PDL generasi terbaru dengan sistem pengencang BOA Fit System untuk penyesuaian cepat di lapangan. Material Cordura ultra ringan dan sol Michelin compound untuk traksi optimal.',
    specifications: {
      material: 'Cordura Ultra-light 800D',
      sole: 'Michelin Compound Anti-slip',
      colors: 'Hitam, Coyote, Olive',
      sizes: '39 – 46 (Half-size tersedia)',
      type: 'BOA Lacing System',
      branding: 'Full Custom Branding',
      moq: '500 Pasang',
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  if (category === 'all') return products;
  return products.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
}
