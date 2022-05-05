import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  console.log(typeof cart);
  if (cart.find((prod) => prod.id === product.id)) {
    product.quantity++;
    console.log(typeof cart);
    dispatch(addToCart([...cart]));
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    product.quantity = 1;
    dispatch(addToCart([...cart, product]));
    localStorage.setItem("cart", JSON.stringify(product));
  }
};

export const removeFromCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();

  if (product.quantity === 1) {
    const newList = cart.filter((prod) => prod.id !== product.id);
    dispatch(removeFromCart(newList));
    localStorage.setItem("cart", JSON.stringify(newList));
  } else {
    product.quantity--;
    dispatch(removeFromCart([...cart]));
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
