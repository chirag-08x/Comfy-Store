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
    dispath({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

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

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
