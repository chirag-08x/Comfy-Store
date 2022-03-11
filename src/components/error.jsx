import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="section-center">
      <h1>There was an error...</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    text-align: center;
  }
`;

export default Error;
