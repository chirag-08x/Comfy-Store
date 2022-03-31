import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const {
    state: { total_items },
  } = useCartContext();

  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper" onClick={closeSidebar}>
      <Link to={"/cart"}>
        cart
        <span className="cart-icon">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>

      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            closeSidebar();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            closeSidebar();
            loginWithRedirect();
          }}
        >
          Login
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    color: #102a42;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 0.5rem;
    text-transform: capitalize;
  }

  .auth-btn {
    border: none;
    background: transparent;
  }

  .cart-icon {
    position: relative;
  }

  .cart-value {
    position: absolute;
    top: -0.8rem;
    right: -1rem;
    color: white;
    background-color: #ab7a5f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 1rem;
  }
`;

export default CartButtons;
