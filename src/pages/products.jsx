import styled from "styled-components";
import NavigateBar from "../components/navigatebar";
import { Filters, Sort, ProductList } from "../components";

const Products = () => {
  return (
    <Wrapper className="page-100">
      <NavigateBar title="products" />
      <section className="section-center product-center">
        <div className="filters">
          <Filters />
        </div>

        <div className="sort-products">
          <Sort />
          <ProductList />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 768px) {
    .product-center {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 0 1rem;
    }
  }
`;

export default Products;
