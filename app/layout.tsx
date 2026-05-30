import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admiral Tactical — Produsen Sepatu Tactical Terpercaya',
  description: 'Produsen sepatu tactical, PDL, dan custom footwear untuk instansi, pemerintah, dan pengadaan skala besar. Berbasis di Bandung, Indonesia.',
  keywords: ['sepatu tactical', 'PDL', 'pengadaan sepatu', 'custom footwear', 'Bandung'],
  openGraph: {
    title: 'Admiral Tactical — Produsen Sepatu Tactical Terpercaya',
    description: 'Produsen sepatu tactical untuk pengadaan skala besar.',
    url: 'https://admiraltactical.co.id',
    siteName: 'Admiral Tactical',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admiral Tactical — Produsen Sepatu Tactical Terpercaya',
    description: 'Produsen sepatu tactical untuk pengadaan skala besar.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
