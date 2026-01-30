import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{
        border: "1px solid #ddd",
        padding: 12,
        cursor: "pointer"
      }}>
        <img
          src={product.image}
          width={120}
          height={120}
          style={{ objectFit: "contain" }}
        />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
