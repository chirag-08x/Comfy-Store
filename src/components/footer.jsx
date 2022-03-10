import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()}
        <span className="color-text"> ComfySloth. </span>
      </p>
      <p>all rights reserved</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  p {
    color: var(--clr-white);
    letter-spacing: 1px;
    word-spacing: 2px;
    text-transform: capitalize;

    span {
      color: var(--clr-primary-2);
      margin-right: 0.5rem;
    }
  }
`;

export default Footer;
