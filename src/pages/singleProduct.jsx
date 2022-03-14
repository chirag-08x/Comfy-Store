import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Loading,
  Error,
  ProductImages,
  Stars,
  AddToCart,
  Notify,
} from "../components";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helper";
import { single_products_url } from "../utils/api_endpoint";
import NavigateBar from "../components/navigatebar";

const SingleProduct = () => {
  const { id } = useParams();
  const { state, fetchSingleProduct } = useProductsContext();
  const navigate = useNavigate();

  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = state;

  useEffect(() => {
    fetchSingleProduct(`${single_products_url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <Error />
        <p
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: "1.25rem",
            color: "black",
            marginBottom: "2rem",
          }}
        >
          redirecting back to home page.....
        </p>
      </>
    );
  }

  console.log(product);

  const {
    id: productID,
    category,
    colors,
    company,
    description,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = product;

  return (
    <Wrapper>
      <NavigateBar title={name} product />
      <section className="section-center page">
        <Link to={"/products"}>
          <button className="btn">back to products</button>
        </Link>

        <article className="product-center">
          <ProductImages images={images} />

          <section className="content">
            <h2 className="name">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span> available : </span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <p className="info">
              <span>sku : </span>
              {productID}
            </p>
            <p className="info">
              <span>brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 ? <AddToCart product={product} /> : <Notify />}
          </section>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn {
    font-size: 0.8rem;
  }

  .product-center {
    margin-top: 2rem;
  }

  .content {
    margin-top: 3rem;

    .price {
      font-size: 1rem;
      color: var(--clr-primary-2);
      margin-bottom: 1rem;
    }

    .desc {
      color: var(--clr-grey-1);
      line-height: 2;
      margin-bottom: 1rem;
    }

    .info {
      display: grid;
      grid-template-columns: 125px 1fr;
      margin-bottom: 1rem;
      text-transform: capitalize;
      * {
        font-size: 0.875rem;
      }
      span {
        font-weight: bold;
        color: var(--clr-grey-3);
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid var(--clr-grey-7);
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    .content {
      margin-top: 0;
      .price {
        font-size: 1.25rem;
      }

      .info {
        * {
          font-size: 1rem;
        }
      }
    }
    .product-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 4rem;
      justify-items: center;
      align-content: start;
    }
  }
`;

export default SingleProduct;
