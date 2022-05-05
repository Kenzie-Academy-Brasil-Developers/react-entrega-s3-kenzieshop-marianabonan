import { combineReducers } from "redux";
import cartReducer from "./modules/cart/reducer";
import productsReducer from "./modules/products/reducer";

export default combineReducers({
  cart: cartReducer,
  product: productsReducer,
});
