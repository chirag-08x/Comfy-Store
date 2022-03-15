import styled from "styled-components";
import Product from "./product";

const GridView = ({ products }) => {
  return (
    <GridWrapper>
      <article className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </article>
    </GridWrapper>
  );
};

const GridWrapper = styled.section`
  .products {
    display: grid;
    gap: 2rem 2rem;
    margin-bottom: 4rem;

    @media (min-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1220px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
