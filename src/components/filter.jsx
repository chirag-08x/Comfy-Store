import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Filters;
