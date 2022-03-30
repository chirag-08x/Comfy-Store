import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColumns from "./cartColumns";
import CartItem from "./cartItem";
import CartTotals from "./cartTotals";

const CartContent = () => {
  const {
    state: { cart },
    clearCart,
  } = useCartContext();
  return (
    <Wrapper className="page section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />

      <article className="link-container">
        <Link to={"/products"}>
          <button className="btn">continue shopping</button>
        </Link>

        <button className="btn clear-btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </article>

      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  hr {
    margin-top: 3rem;
  }
  .link-container {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
      font-size: 0.9rem;
      color: white;
      text-transform: capitalize;
    }

    .clear-btn {
      background-color: black;
    }
  }
`;

export default CartContent;
