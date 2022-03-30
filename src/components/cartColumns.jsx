import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      gap: 0 1rem;
      place-items: center;

      h5 {
        font-weight: 400;
        text-transform: capitalize;
        font-size: 1rem;
        color: var(--clr-grey-5);
        letter-spacing: 2px;
      }
    }

    hr {
      margin-top: 2rem;
      margin-bottom: 3rem;
      border: none;
      border-top: 1px solid var(--clr-grey-6);
    }
  }
`;

export default CartColumns;
