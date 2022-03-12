import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigateBar = ({ title, product }) => {
  return (
    <Wrapper>
      <section className="navigate-center">
        <h3>
          <Link to={"/"}>home</Link>
          {product && <Link to={"/products"}> / Product</Link>}
          <span> / {title} </span>
        </h3>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-3);
  height: 9rem;
  .navigate-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    h3 {
      font-size: 1.5rem;
    }
    * {
      color: var(--clr-primary-6);
    }
    span {
      color: var(--clr-primary-1);
    }
    @media (min-width: 992px) {
      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export default NavigateBar;
