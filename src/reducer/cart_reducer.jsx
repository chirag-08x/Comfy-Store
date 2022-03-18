import { ADD_TO_CART } from "../actions";

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
  }
  return { ...state };
};

export default reducer;
