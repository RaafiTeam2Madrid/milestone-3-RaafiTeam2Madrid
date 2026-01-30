import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart.length)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg font-medium">
        Cart kosong
      </p>
    );

  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Total: ${total.toFixed(2)}
        </h2>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}