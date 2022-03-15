import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import GridView from "./gridview";
import Listview from "./listview";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5>sorry no products matched your search</h5>;
  }

  if (grid_view === false) {
    return <Listview products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
