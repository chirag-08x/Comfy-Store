import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Error,
  Home,
  Products,
  SingleProduct,
  CheckOut,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
