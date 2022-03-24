import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";

const Listview = ({ products }) => {
  return (
    <ListWrapper>
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />

            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}....</p>
              <Link to={`/product/${id}`}>
                <button className="btn btn-small">details</button>
              </Link>
            </div>
          </article>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.section`
  display: grid;
  gap: 3rem 0;

  img {
    border-radius: 0.3rem;
    height: 13rem;
    margin-bottom: 1rem;
    max-width: 25rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 0.875rem;
    letter-spacing: 1px;
    color: var(--clr-primary-2);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    /* 
    button {
      border: none;
      background: transparent;
      text-transform: capitalize;
      font-size: 0.9rem;
      color: blue;
    } */
  }

  .btn-small {
    font-size: 0.7rem;
    color: white;
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: 20rem 1fr;
      gap: 0 3rem;
    }
  }
`;

export default Listview;
