import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { ProductsProvider } from "./context/products_context";

const Index = () => {
  return (
    <ProductsProvider>
      <App />
    </ProductsProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
