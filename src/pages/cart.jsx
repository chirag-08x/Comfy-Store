import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { CartContent, NavigateBar } from "../components";

const Cart = () => {
  const { state } = useCartContext();
  const { cart } = state;

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to={"/products"}>
            <button className="btn">fill it</button>
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <NavigateBar title="cart" />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  text-align: center;
  .empty {
    text-align: center;
    padding: 5rem 0;
    h2 {
      margin-bottom: 1rem;
      text-transform: initial;
    }
    button {
      font-size: 0.875rem;
    }
  }
`;

export default Cart;
