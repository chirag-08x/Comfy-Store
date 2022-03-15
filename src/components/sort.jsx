import { BsGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <SortWrapper>
      <article className="view-btns">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>

        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </article>

      <p>{products.length} products found</p>
      <hr />

      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </SortWrapper>
  );
};

const SortWrapper = styled.section`
  .view-btns {
    display: flex;
    gap: 0 0.5rem;
    margin-bottom: 1rem;

    button {
      display: grid;
      place-items: center;
      border-radius: 0.3rem;
      width: 1.5rem;
      height: 1.5rem;
      border: none;
      font-size: 1rem;
      border: 1px solid black;
      background: transparent;
    }

    .active {
      background-color: black;
      color: white;
      border: none;
    }
  }

  p {
    margin-bottom: 0.5rem;
    color: var(--clr-grey-1);
  }

  hr {
    border: none;
    border-top: 1px solid grey;
    margin-bottom: 1rem;
  }

  form {
    margin-bottom: 2.5rem;
    label {
      margin-right: 1rem;
      text-transform: capitalize;
      font-size: 1rem;
    }

    select {
      border: none;
      font-size: 1rem;
      text-transform: capitalize;
    }
  }

  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    gap: 0 1.5rem;
    margin-bottom: 2rem;

    .view-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 0.5rem;
      place-items: center;
    }

    p,
    hr,
    .view-btns,
    form {
      margin-bottom: 0;
    }
  }
`;

export default Sort;
