import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: 24 }}>Loading products...</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>Product Listing</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
        gap: 24
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: "1px solid #e5e5e5",
            borderRadius: 12,
            padding: 16
          }}>
            <img src={p.image} style={{ height:160, objectFit:"contain" }} />

            <Link href={`/product/${p.id}`}>
              <h3 style={{ cursor:"pointer" }}>{p.title}</h3>
            </Link>

            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
