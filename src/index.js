import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";

const Index = () => {
  return (
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
