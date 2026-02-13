# 🛍️ RaafiShop

> **Modern E-Commerce Application** built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

This project demonstrates advanced Next.js concepts including **Middleware** for route protection, **Zustand** for global state management (Shopping Cart), and a full **Admin Dashboard** for product management (CRUD).

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand (Persisted to LocalStorage)
- **Authentication:** Custom Middleware & Cookies (`js-cookie`)
- **API:** [FakeStoreAPI](https://fakestoreapi.com/)
- **Deployment:** Vercel

---

## ✨ Key Features

### 🛒 1. Customer Features (Public)
- **Product Listing:** Dynamic fetching of products using Server Components.
- **Shopping Cart (Advanced):**
  - Add items to cart.
  - Adjust quantity (Increase/Decrease).
  - Remove items.
  - **Auto-Save:** Cart data persists on refresh (LocalStorage).
- **Checkout Process:** Secure checkout flow accessible only to logged-in users.

### 🔐 2. Authentication & Security
- **Middleware Protection:** Routes like `/checkout` and `/admin` are protected. Unauthenticated users are redirected to login.
- **Login System:** Integration with FakeStoreAPI auth endpoint.
- **Dynamic Navbar:** Changes state based on login status (Login vs Logout).

### 🛠️ 3. Admin Dashboard (CRUD)
- **Read:** View all products in a comprehensive data table.
- **Create:** Add new products via a structured form.
- **Update:** Edit existing product details (Pre-filled forms using Dynamic Routes).
- **Delete:** Remove products from the catalog.
> *Note: Since FakeStoreAPI is a public API, Create/Update/Delete operations are simulated and will not permanently affect the real database.*

---

## 🔑 Demo Credentials
## Link Vercel 
https://milestone-3-raafi-team2-madrid-m995.vercel.app/

To test the **Login**, **Checkout**, and **Admin** features, use these credentials:

| Username | Password |
|----------|----------|
| `mor_2314` | `83r5^_` |

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── admin/          # Admin Dashboard (CRUD Operations)
│   │   ├── create/     # Add Product Page
│   │   ├── edit/[id]/  # Edit Product Page (Dynamic Route)
│   │   └── page.tsx    # Product List Table
│   ├── cart/           # Shopping Cart Page
│   ├── checkout/       # Protected Checkout Page
│   ├── login/          # Login Page
│   ├── layout.tsx      # Root Layout (Navbar & Global Settings)
│   └── page.tsx        # Homepage (Product Grid)
├── components/         # Reusable Components (Navbar, ProductCard)
├── store/              # Zustand Store (Cart Logic & Persistence)
├── types/              # TypeScript Interfaces (Product, CartItem)
├── utils/              # API Helper Functions
└── middleware.ts       # Route Protection Logic

