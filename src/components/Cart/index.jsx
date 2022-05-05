import { useSelector } from "react-redux";

import CardCarrinho from "../CardCarrinho";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <h3>Compra do humano...</h3>
      <ul>
        {cart.map((product) => (
          <CardCarrinho key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
