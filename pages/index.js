import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
  if (!products.length) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg font-medium">
        No products available
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍️ Product Listing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
      props: { products },
      revalidate: 60,
    };
  } catch {
    return { props: { products: [] } };
  }
}