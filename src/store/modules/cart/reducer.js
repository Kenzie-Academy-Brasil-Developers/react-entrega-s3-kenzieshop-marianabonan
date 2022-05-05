import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...action.product];

    case REMOVE_CART:
      return action.list;

    default:
      return state;
  }
};
export default cartReducer;
