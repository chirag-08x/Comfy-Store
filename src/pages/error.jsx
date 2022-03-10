import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="error page-100">
      <h1>404</h1>
      <h2>sorry, the page you tried cannot be found</h2>
      <Link to={"/"}>
        <button className="btn">back home</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-3);
  display: grid;
  justify-items: center;
  align-content: center;

  h1 {
    font-size: 10rem;
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 800px) {
  }
`;
export default Error;
