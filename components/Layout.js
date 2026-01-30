import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Layout({ children }) {
  const { cart } = useCart();

  return (
    <div>
      <nav style={{
        padding: "16px 32px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        {/* Logo */}
        <div style={{
          fontSize: 20,
          fontWeight: 700
        }}>
          RaafiShop
        </div>

        {/* Menu */}
        <div style={{
          display: "flex",
          gap: 24,
          alignItems: "center"
        }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/promo">Promo</NavLink>

          <Link href="/cart" style={{ textDecoration: "none" }}>
            <div style={{
              padding: "8px 14px",
              borderRadius: 8,
              background: "#111827",
              color: "white",
              fontWeight: 600
            }}>
              Cart ({cart.length})
            </div>
          </Link>
        </div>
      </nav>

      <main style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 32
      }}>
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "#374151",
        fontWeight: 500
      }}
    >
      {children}
    </Link>
  );
}
