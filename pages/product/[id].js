import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return <p>Product tidak ditemukan</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>{product.title}</h1>

      <img src={product.image} width={200} style={{ objectFit: "contain" }} />

      <p style={{ marginTop: 20 }}>{product.description}</p>

      <h2>${product.price}</h2>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: 12,
          background: "black",
          color: "white",
          cursor: "pointer",
          marginTop: 12,
        }}
      >
        Add To Cart
      </button>

      <Link href="/cart">
  <button
    style={{
      padding: 12,
          background: "black",
          color: "white",
          cursor: "pointer",
          marginTop: 12,      
    }}
  >
    Go to Cart
  </button>
</Link>

    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    if (!res.ok) {
      throw new Error("Fetch gagal");
    }

    const product = await res.json();

    return {
      props: { product },
    };
  } catch (error) {
    return {
      props: { product: null },
    };
  }
}
