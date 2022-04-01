import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

const Index = () => {
  return (
    <Auth0Provider
      domain="dev-vvy2866e.us.auth0.com"
      clientId="6uwDHKSS1RlZSF8kEAGZ0kkM3tVE5P6D"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
