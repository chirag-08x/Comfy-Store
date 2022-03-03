import NavigateBack from "../components/navigateBack";
import { useGlobalContext } from "../context";
import DisplayProducts from "../components/displayProducts";
import { FaBars } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";

const Products = () => {
  const { items, loading, sortByType } = useGlobalContext();

  return (
    <>
      <NavigateBack currentPage={"products"} />
      <section className="all-products">
        <section className="section-center">
          <section className="sort-items">
            <div className="grid-btn-container">
              <button>
                <BsFillGridFill />
              </button>
              <button>
                <FaBars />
              </button>
            </div>

            <p>{items.length} products found</p>
            <hr />
            <form>
              <label htmlFor="sort">sort by</label>
              <select
                className="sort-input"
                id="sort"
                onChange={(e) => sortByType(e.target.value)}
              >
                <option value="price-lowest">price (lowest)</option>
                <option value="price-highest">price (highest)</option>
                <option value="name-a">name (a - z)</option>
                <option value="name-z">name (z - a)</option>
              </select>
            </form>
          </section>

          <section className="filters"></section>

          <section className="products">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <article className="product-list">
                <DisplayProducts data={items} />
              </article>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Products;
