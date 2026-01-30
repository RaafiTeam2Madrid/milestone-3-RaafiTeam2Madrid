# README — RevoShop Next.js E-Commerce Frontend

## Link Vercel
https://milestone-3-raafi-team2-madrid.vercel.app/

## 📖 Project Overview
RevoShop adalah aplikasi front end e-commerce berbasis **Next.js** yang mengimplementasikan **product listing**, **product detail**, dan **cart management**.  
Aplikasi ini menggunakan beberapa strategi data fetching yaitu **Static Site Generation (SSG)**, **Server Side Rendering (SSR)**, dan **Client Side Rendering (CSR)** sesuai kebutuhan halaman.

Project ini dibangun untuk memenuhi indikator penilaian **Next.js fundamentals**, **dynamic routing**, **data fetching strategies**, dan **state management**.

---

## ✨ Features Implemented
- Product listing page dengan **Static Site Generation**
- Product detail page dengan **dynamic routing**
- **Server Side Rendering** untuk detail produk
- **Client Side Rendering** untuk halaman promo
- Global cart state dengan **Context API**
- Add to cart dan remove cart
- Persist cart dengan **localStorage**
- Navigation menggunakan **next/link**
- Reusable `ProductCard` component
- Layout dan navbar dengan cart counter
- Loading state dan error handling pada client fetch
- Responsive product grid

---

## 🛠 Tech Stack
- Next.js (pages router)
- React hooks
- Context API
- FakeStoreAPI
- next/link routing
- localStorage persistence
- CSS inline styling

---

## 🗂 Routing Structure
- `/` → Product Listing (**SSG**)  
- `/product/[id]` → Product Detail (**SSR + dynamic routing**)  
- `/promo` → Promo Products (**CSR**)  
- `/cart` → Cart Page (**global state**)  

---

## 📡 Data Fetching Strategy Explanation

### 🔹 Static Site Generation (SSG)
- **File:** `pages/index.js`  
- **Method:** `getStaticProps()`  
- **Alasan:**  
  - Data produk relatif stabil  
  - Bisa di-cache  
  - Performa tinggi  
  - SEO optimal  
  - Mengurangi beban server  
- **Proses:**  
  - Data diambil saat build time  
  - HTML sudah jadi saat dikirim ke browser  
  - `revalidate` digunakan untuk refresh berkala  

### 🔹 Server Side Rendering (SSR)
- **File:** `pages/product/[id].js`  
- **Method:** `getServerSideProps()`  
- **Alasan:**  
  - Data bergantung pada parameter `id`  
  - Harus selalu fresh  
  - Cocok untuk halaman detail dinamis  
- **Proses:**  
  - Request masuk  
  - Server fetch data per `id`  
  - HTML dirender di server  
  - Dikirim ke client  

### 🔹 Client Side Rendering (CSR)
- **File:** `pages/promo.js`  
- **Method:** `useEffect + fetch`  
- **Alasan:**  
  - Data tidak kritikal SEO  
  - Cocok untuk data tambahan  
  - Mengurangi beban build  
  - Bisa tampil loading state  
- **Proses:**  
  - Page render dulu  
  - Browser fetch data  
  - State diupdate  
  - UI re-render  

---

## 🛒 State Management
- **File:** `context/CartContext.js`  
- **Fungsi:**  
  - `addToCart`  
  - `removeFromCart`  
  - `clearCart`  
- **Persistence:**  
  - State dipersist menggunakan **localStorage** agar data tidak hilang saat refresh.  
- **Lifecycle:**  
  - Load dari localStorage saat mount  
  - Simpan setiap cart berubah  

---

## 🧩 Component Design
- **Reusable components** digunakan untuk modularitas:
  - `components/Layout.js`
  - `components/ProductCard.js`
- **Keuntungan:**  
  - Kode lebih bersih  
  - Mudah dirawat  
  - Konsisten UI  
  - Memenuhi best practice React  

---

## 🧭 Navigation
- Navigasi menggunakan **next/link**  
- **Keuntungan:**  
  - Client side navigation  
  - Tanpa reload penuh  
  - Performa lebih baik  
  - Sesuai indikator Next.js routing  

---

## ⚠️ Error Handling
Sudah diterapkan pada:
- `getStaticProps` → try/catch  
- `getServerSideProps` → try/catch  
- Client fetch → error state  
- CSR → loading state  

---

## ▶️ How To Run
1. Install dependencies:
   ```bash
   npm install


