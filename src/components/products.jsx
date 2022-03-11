import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";

const Products = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/product/${id}`}>
          <button>
            <FaSearch />
          </button>
        </Link>
      </div>

      <div className="product-info">
        <p className="name">{name}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: 0.3rem;
    margin-bottom: 1rem;

    &:hover button {
      display: grid;
    }

    img {
      height: 14rem;
      border-radius: 0.3rem;
    }

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none;
      background: var(--clr-primary-2);
      color: var(--clr-white);
      font-size: 1.25rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      padding: 0.7rem;
      display: none;
    }
  }
  .product-info {
    display: flex;
    justify-content: space-between;

    p {
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    .name {
      color: var(--clr-dark);
    }

    .price {
      color: var(--clr-primary-2);
    }
  }
`;

export default Products;
