import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import filter_reducer from "../reducer/filter_reducer";
import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  CLEAR_FILTERS,
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from "../actions";
import { useProductsContext } from "./products_context";

const FilterContext = createContext();

const initalState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterProvider = ({ children }) => {
  const {
    state: { products },
  } = useProductsContext();

  const [state, dispath] = useReducer(filter_reducer, initalState);

  useEffect(() => {
    dispath({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispath({ type: FILTER_PRODUCTS });
    dispath({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispath({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispath({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispath({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispath({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {};

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
