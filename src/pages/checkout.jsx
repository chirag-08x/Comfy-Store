import NavigateBar from "../components/navigatebar";
import styled from "styled-components";

const CheckOut = () => {
  return (
    <CheckoutWrapper>
      <NavigateBar title="checkout" />
      <section className="section-center page"></section>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.section``;

export default CheckOut;
