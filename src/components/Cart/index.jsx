import { useSelector } from "react-redux";

import CardCarrinho from "../CardCarrinho";
import TotalPrice from "../TotalPrice";
import { Container } from "./styles";
const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Container>
      <section>
        <h3>Compra do humano...</h3>
        <TotalPrice />
      </section>
      <ul>
        {cart.map((product) => (
          <CardCarrinho key={product.id} product={product} />
        ))}
      </ul>
    </Container>
  );
};

export default Cart;
