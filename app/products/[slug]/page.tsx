import { getProductBySlug, products } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ClientProductDetail from './ClientProductDetail';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Admiral Tactical`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return <ClientProductDetail product={product} relatedProducts={relatedProducts} />;
}
