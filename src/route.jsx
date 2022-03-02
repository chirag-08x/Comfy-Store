import Home from "./routes/home";
import About from "./routes/about";
import Products from "./routes/products";
import Cart from "./routes/cart";
import Login from "./routes/login";
import SingleProduct from "./routes/singleProduct";

import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singleProduct" element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
