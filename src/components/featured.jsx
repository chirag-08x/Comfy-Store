import { useEffect } from "react";
import { useGlobalContext } from "../context";
import DisplayProducts from "./displayProducts";
import { useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const { items, loading } = useGlobalContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setData(getThreeRandomProducts(items));
    }
  }, [loading]);

  return (
    <section className="featured-products">
      <section className="section-center">
        <article className="title-container">
          <h2 className="title-second">featured products</h2>
          <div className="underline"></div>
        </article>

        <article className="products">
          {loading ? (
            <h1 className="loading">Loading...</h1>
          ) : (
            <>
              <article className="product-list">
                <DisplayProducts data={data} />
              </article>
              <Link to={"/products"} className="btn-container">
                <button className="btn featured-btn">all products</button>
              </Link>
            </>
          )}
        </article>
      </section>
    </section>
  );
};
export default Featured;

const getThreeRandomProducts = (items) => {
  const randomProducts = new Set();
  while (randomProducts.size != 3) {
    const randomNum = Math.floor(Math.random() * (items.length - 1 - 0) + 0);
    randomProducts.add(randomNum);
  }
  const finalProducts = Array.from(randomProducts, (x) => items[x]);
  return finalProducts;
};
