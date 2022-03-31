import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helper";
import { useUserContext } from "../context/user_context";

const CartTotals = () => {
  const {
    state: { total_amount, shipping_fee },
  } = useCartContext();

  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to={"/checkout"}>
            <button className="btn">proceed to checkout</button>
          </Link>
        ) : (
          <button
            className="btn"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (min-width: 782px) {
    justify-content: flex-end;
  }

  div {
    width: 90vw;
    max-width: 400px;

    article {
      border: 1px solid var(--clr-grey-4);
      border-radius: 0.3rem;
      padding: 1.5rem 2rem;

      * {
        text-transform: capitalize;
        line-height: 2;
        text-align: left;
      }

      hr {
        margin: 1rem 0 1.5rem 0;
        border: none;
        border-top: 1px solid var(--clr-grey-5);
      }

      h5,
      p,
      h4 {
        font-size: 1rem;
        letter-spacing: 1px;
        display: grid;
        grid-template-columns: 200px 1fr;
      }

      h4 {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }

    .btn {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export default CartTotals;
