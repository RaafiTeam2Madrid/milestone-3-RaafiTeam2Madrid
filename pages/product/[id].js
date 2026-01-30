import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Product tidak ditemukan</h2>
        <Link href="/">Kembali ke Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        width={220}
        style={{ objectFit: "contain" }}
      />

      <p style={{ marginTop: 20 }}>{product.description}</p>

      <h2>${product.price}</h2>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: 12,
          background: "black",
          color: "white",
          cursor: "pointer",
          marginTop: 16,
        }}
      >
        Add To Cart
      </button>

      <Link href="/cart">
        <p style={{ marginTop: 12, color: "blue" }}>
          Go to Cart
        </p>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      return { props: { product: null } };
    }

    const product = await res.json();

    if (!product || product.id === undefined) {
      return { props: { product: null } };
    }

    return {
      props: { product },
    };
  } catch (e) {
    console.error("SSR fetch error:", e);
    return {
      props: { product: null },
    };
  }
}
