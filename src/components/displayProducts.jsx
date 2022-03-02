import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayProducts = ({ data }) => {
  console.log("data", data);
  return (
    <>
      {data.map((item) => {
        const { id, name, price, image } = item;
        return (
          <article key={id} className="product">
            <div className="product-img">
              <img src={image} alt={name} />
              <Link to={"/singleProduct"} className="search-btn-container">
                <button className="search-btn">
                  <FaSearch />
                </button>
              </Link>
            </div>
            <div className="item-info">
              <p className="item-name">{name}</p>
              <p className="item-price">${price / 100}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default DisplayProducts;
