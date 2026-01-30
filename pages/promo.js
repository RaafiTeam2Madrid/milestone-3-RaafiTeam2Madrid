import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Promo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then(r => r.json())
      .then(d => setData(d))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading promo...</p>;
  if (error) return <p>Failed load promo</p>;

  return (
    <>
      <h1>Promo</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        {data.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
