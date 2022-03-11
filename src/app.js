import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Error,
  Home,
  Products,
  SingleProduct,
  CheckOut,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
