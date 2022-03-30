import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helper";
import AmountButtons from "./amountBtns";

const CartItem = ({ id, amount, color, image, max, name, price }) => {
  const increase = () => {};
  const decrease = () => {};

  const { removeItem } = useCartContext();

  return (
    <Wrapper className="content">
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color : <span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons increase={increase} decrease={decrease} amount={amount} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto auto;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 776px) {
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    gap: 0 1rem;
    align-items: center;
  }

  .price,
  .subtotal {
    display: none;
  }

  .title {
    display: flex;
    gap: 0 1rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .name {
        text-transform: capitalize;
        letter-spacing: 1px;
      }

      .color {
        text-transform: capitalize;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        margin: 0;
        gap: 0 0.4rem;
        font-size: 0.875rem;
        span {
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
        }
      }

      .price-small {
        letter-spacing: 1px;
        color: var(--clr-primary-2);
      }
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 0.3rem;
    }
  }
`;

export default CartItem;
