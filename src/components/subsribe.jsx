import styled from "styled-components";

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <section className="section-center">
        <article className="hero-text">
          <h3>Join our newsletter and get 20% off</h3>
          <p>
            To get exciting offers and deals, do sign up for our newsletter, and
            get all the exciting offers on you mail.
          </p>
        </article>

        <form className="form">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <button type="submit" className="btn">
            subscribe
          </button>
        </form>
      </section>
    </SubscribeWrapper>
  );
};

const SubscribeWrapper = styled.section`
  .hero-text {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.5rem;
      text-transform: initial;
    }
    line-height: 2;
  }

  .form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;

    input {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border: 2px solid black;
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      color: var(--clr-dark);
      border: 2px solid black;
      border-left: none;
    }

    button:hover {
      color: var(--clr-white);
      background-color: var(--clr-primary-2);
    }
  }

  @media (min-width: 768px) {
    .hero-text {
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2rem;
      place-items: center;
    }
  }

  @media (min-width: 1200px) {
    .section-center {
      padding: 15rem 0;
    }
  }
`;

export default Subscribe;
