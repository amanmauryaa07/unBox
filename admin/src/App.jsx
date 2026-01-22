import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import Orders from "./pages/Orders";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const isAdmin = true; // baad me admin auth lagayenge

  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />

      {isAdmin ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<Orders />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;