import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  return <h2>Hello form checkout form</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
