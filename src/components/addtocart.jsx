import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./amountBtns";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    if (amount === stock) {
      return;
    }
    setAmount((prevAmt) => prevAmt + 1);
  };

  const decreaseAmount = () => {
    if (amount === 1) {
      return;
    }
    setAmount((prevAmt) => prevAmt - 1);
  };

  return (
    <Wrapper>
      <div className="colors info">
        <span>colors :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(color)}
              >
                {color === mainColor && <FaCheck style={{ color: "white" }} />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="btn-container">
        <AmountButtons
          increase={increaseAmount}
          decrease={decreaseAmount}
          amount={amount}
        />
      </div>

      <Link
        to={"/cart"}
        onClick={() => addToCart(id, mainColor, amount, product)}
      >
        <button className="btn">add to cart</button>
      </Link>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  .info {
    span {
      font-weight: bold;
      font-size: 0.875rem;
      text-transform: capitalize;
      color: var(--clr-grey-3);
    }

    div {
      display: flex;
      gap: 0 0.5rem;
      button {
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: none;
      }
    }
  }
`;
