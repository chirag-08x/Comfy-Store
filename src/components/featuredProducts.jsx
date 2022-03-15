import Loading from "./loading";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Product from "./product";
import { Link } from "react-router-dom";
import Error from "./error";

const FeaturedProducts = () => {
  const { state } = useProductsContext();
  const {
    featured_products: featured,
    products_loading: loading,
    products_error: error,
  } = state;

  if (error) {
    return <Error />;
  }

  return (
    <FeaturedWrapper>
      <section className="section-center">
        <article className="hero-text">
          <h1>featured products</h1>
          <div className="underline"></div>
        </article>

        {loading ? (
          <Loading />
        ) : (
          <article className="products">
            {featured.slice(0, 3).map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </article>
        )}

        <Link className="btn-container" to={"/products"}>
          <button className="btn">all products</button>
        </Link>
      </section>
    </FeaturedWrapper>
  );
};

const FeaturedWrapper = styled.section`
  background-color: var(--clr-grey-10);

  .btn-container {
    display: flex;
    justify-content: center;
  }

  .btn {
    padding: 0.5rem 1rem;
  }

  .hero-text {
    margin-bottom: 4rem;
    h1 {
      text-align: center;
    }
  }

  .products {
    display: grid;
    gap: 2rem 2rem;
    margin-bottom: 4rem;

    .btn-container {
      display: inline-block;
      margin: 0 auto;
    }

    @media (min-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1220px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default FeaturedProducts;
