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
    year: '2023',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Sepatu PDL Dinas dengan material cordura premium dan sol anti-slip. Telah digunakan oleh berbagai satuan kepolisian dan TNI di seluruh Indonesia.',
    specifications: {
      material: 'Cordura Premium',
      sole: 'Anti-slip Rubber',
      colors: 'Sesuai Permintaan',
      sizes: '39 – 46 (Custom tersedia)',
      type: 'Pengadaan Pemerintah',
      branding: 'Logo & Patch',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-tct-02',
    sku: 'ADM-TCT-02',
    name: 'Desert Boot Tactical',
    category: 'Tactical Boots',
    year: '2023',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Boot tactical dengan konstruksi mid-cut, upper suede premium, dan sol vibram yang tangguh. Cocok untuk operasional lapangan di berbagai medan.',
    specifications: {
      material: 'Suede Premium',
      sole: 'Vibram Mountain',
      colors: 'Tan, Black, Olive',
      sizes: '39 – 46',
      type: 'Tactical',
      branding: 'Custom tersedia',
      moq: '300 Pasang',
    },
  },
  {
    slug: 'adm-sft-03',
    sku: 'ADM-SFT-03',
    name: 'Safety Boot Industri',
    category: 'Safety Shoes',
    year: '2022',
    image: 'https://images.pexels.com/photos/3962284/pexels-photo-3962284.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Safety shoes dengan steel toe cap SNI, material full-grain leather, dan sol anti-static. Tersertifikasi untuk lingkungan kerja berpotensi bahaya.',
    specifications: {
      material: 'Full-Grain Leather',
      sole: 'Anti-static Rubber',
      colors: 'Black, Brown',
      sizes: '39 – 46',
      type: 'Safety',
      branding: 'Logo tersedia',
      moq: '500 Pasang',
    },
  },
  {
    slug: 'adm-cst-04',
    sku: 'ADM-CST-04',
    name: 'Security Boot Custom',
    category: 'Custom Project',
    year: '2024',
    image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Boot keamanan custom dengan logo dan branding klien, material ballistic nylon, dan sistem penguncian cepat. Dibuat eksklusif untuk perusahaan keamanan nasional.',
    specifications: {
      material: 'Ballistic Nylon',
      sole: 'Vibram Lug',
      colors: 'Custom',
      sizes: 'Custom',
      type: 'Custom Design',
      branding: 'Full Branding',
      moq: '1000 Pasang',
    },
  },
  {
    slug: 'adm-gov-05',
    sku: 'ADM-GOV-05',
    name: 'PDL Polri — Batch 2024',
    category: 'Pengadaan Pemerintah',
    year: '2024',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Proyek pengadaan resmi untuk satuan Polri, diproduksi 10.000 pasang dengan spesifikasi standar institusi. Proses tender resmi dengan dokumentasi lengkap.',
    specifications: {
      material: 'Cordura',
      sole: 'Anti-slip',
      colors: 'Navy Blue',
      sizes: '39 – 46',
      type: 'Pengadaan Pemerintah',
      branding: 'Standar Institusi',
      moq: '10000 Pasang',
    },
  },
  {
    slug: 'adm-tct-06',
    sku: 'ADM-TCT-06',
    name: 'Special Forces Boot',
    category: 'Tactical Boots',
    year: '2024',
    image: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?w=800&q=85&auto=format&fit=crop',
    description: 'Boot tactical high-cut dengan reinforced ankle support, waterproof membrane Gore-Tex, dan sol Vibram Mountain. Dikembangkan bersama klien untuk operasi medan berat.',
    specifications: {
      material: 'Nubuck + Gore-Tex',
      sole: 'Vibram Mountain',
      colors: 'Black, Coyote',
      sizes: '39 – 46',
      type: 'Tactical',
      branding: 'Custom patch',
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
