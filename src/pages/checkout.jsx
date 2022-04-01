import styled from "styled-components";
import { StripeCheckout, NavigateBar } from "../components";

import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const {
    state: { cart },
  } = useCartContext();
  return (
    <main>
      <NavigateBar title="checkout" />
      <Wrapper className="section-center page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to={"/products"}>
              <button className="btn">fill it</button>
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .empty {
    text-align: center;
  }
`;

export default CheckOut;
