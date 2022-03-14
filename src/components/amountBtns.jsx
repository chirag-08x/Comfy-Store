import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <button onClick={decrease}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  width: 125px;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 0 1.5rem; */
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border: none;
    font-size: 1rem;
    display: flex;
    place-items: center;
  }
`;

export default AmountButtons;
