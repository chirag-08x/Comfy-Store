import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { getUniqueValues } from "../utils/helper";
import { formatPrice } from "../utils/helper";

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search */}

          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={`${
                      category === item.toLowerCase() ? "active" : null
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}

          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}

          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((item, index) => {
                if (item === "all") {
                  return (
                    <button
                      name="color"
                      key={index}
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: item }}
                    className={`${
                      item === color ? "color-btn active" : "color-btn"
                    } `}
                    data-color={item}
                    onClick={updateFilters}
                  >
                    {item === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}

          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              className="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}

          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>

        <button className="clear-btn" type="button" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;

    h5 {
      text-transform: capitalize;
      font-size: 1rem;
      letter-spacing: 1px;
      color: var(--clr-dark);
      margin-bottom: 0.4rem;
    }

    /* Text */
    input {
      border: none;
      border-radius: 0.3rem;
      background-color: var(--clr-grey-10);
      padding: 0.6rem 0.5rem;

      ::placeholder {
        text-transform: capitalize;
        letter-spacing: 1px;
      }
    }

    /* category */
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem 0;

      button {
        background: transparent;
        border: none;
        font-size: 0.875rem;
        text-transform: capitalize;
        color: var(--clr-grey-5);
        letter-spacing: 1px;
        padding-bottom: 0.1rem;
      }
    }

    .active {
      border-bottom: 1px solid var(--clr-grey-4);
    }

    /* company */
    select {
      border: none;
      background-color: var(--clr-grey-10);
      padding: 0.25rem;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    /* colors */
    .colors {
      display: flex;
      flex-direction: row;
      gap: 0 0.5rem;

      .color-btn {
        width: 17px;
        height: 17px;
        border: none;
        border-radius: 50%;
        opacity: 0.5;
        display: grid;
        place-items: center;
        color: white;
        font-size: 0.7rem;
      }

      .active {
        opacity: 1;
      }
    }

    /* price */
    .price {
      padding: 0 !important;
    }
  }

  /* shipping */
  .shipping {
    display: flex;
    align-items: center;
    gap: 0 0.8rem;

    label {
      text-transform: capitalize;
    }
  }

  .clear-btn {
    border: none;
    background-color: var(--clr-red-dark);
    color: white;
    padding: 0.3rem 0.8rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-radius: 0.5rem;
    margin-bottom: 3rem;
  }
`;

export default Filters;
