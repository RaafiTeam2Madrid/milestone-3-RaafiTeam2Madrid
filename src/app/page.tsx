
export const dynamic = 'force-dynamic';

import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

async function getProducts() {
  try {
    
    const res = await fetch('https://fakestoreapi.com/products', { 
      cache: 'no-store',
      next: { revalidate: 0 } 
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function Home() {
  const products: Product[] | null = await getProducts();

 
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Ups! Gagal Memuat Produk</h2>
        <p className="text-gray-600 mt-2">Sepertinya server API sedang sibuk. Coba refresh sebentar lagi ya!</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto min-h-screen px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Katalog Produk</h1>
        <p className="text-gray-600">Temukan barang impianmu di RaafiShop</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}