import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Product tidak ditemukan</h2>
        <Link href="/">
          <p style={{ color: "blue", marginTop: 12 }}>
            Kembali ke Home
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        width={200}
        style={{ objectFit: "contain" }}
        alt={product.title}
      />

      <p style={{ marginTop: 20 }}>
        {product.description}
      </p>

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

      <br />

      <Link href="/cart">
        <button
          style={{
            padding: 12,
            background: "#444",
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
  
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (res.ok) {
      const product = await res.json();
      if (product && product.id) {
        return { props: { product } };
      }
    }


    const listRes = await fetch("https://fakestoreapi.com/products");
    const list = await listRes.json();

    const product = list.find(
      p => String(p.id) === String(id)
    );

    return {
      props: {
        product: product || null,
      },
    };

  } catch (error) {
    console.error("SSR fetch error:", error);
    return {
      props: { product: null },
    };
  }
}
