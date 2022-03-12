import { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [imageURL, setImageURL] = useState(images[0]);

  return (
    <Wrapper className="images-container">
      <img src={imageURL.url} alt="" className="main-img" />
      <div className="options">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              onClick={() => setImageURL(images[index])}
              className={image.url === imageURL.url ? "active" : null}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  img {
    height: 19rem;
    border-radius: 0.3rem;
  }

  .options {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 0.5rem;

    img {
      border-radius: 0.3rem;
      height: 50px;
      padding: 1px;
    }

    .active {
      border: 2px solid var(--clr-primary-6);
    }
  }

  @media (min-width: 578px) {
    img {
      height: 38rem;
    }

    .options {
      img {
        height: 100px;
      }
    }
  }

  @media (min-width: 992px) {
    img {
      height: 30rem;
    }
    .options {
      img {
        height: 70px;
      }
    }
  }
`;

export default ProductImages;
