
export const dynamic = 'force-dynamic';

import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { 
      cache: 'no-store',
      // Tambahin timeout biar gak nunggu kelamaan kalau API-nya lemot
      signal: AbortSignal.timeout(5000) 
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    // Kalau API error, kita balikin null aja, jangan bikin website crash
    console.error("API Error:", error);
    return null;
  }
}

export default async function Home() {
  const products: Product[] | null = await getProducts();

  // Kalau data gagal diambil, kasih pesan cantik, jangan error putih
  if (!products) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold text-red-600">Waduh, API-nya lagi Capek...</h2>
        <p className="text-gray-600">Coba refresh halamannya sebentar lagi ya!</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Refresh Halaman
        </button>
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