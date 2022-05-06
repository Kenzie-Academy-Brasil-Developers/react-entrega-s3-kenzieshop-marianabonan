import { useSelector } from "react-redux";
import formatValue from "../../utils/formatValue";
import { Container } from "./style";

const TotalPrice = () => {
  const { cart } = useSelector((state) => state);
  const valor = cart.reduce(
    (acm, { price, quantity }) => acm + price * quantity,
    0
  );

  return (
    <Container>
      <h3>Valor Total:</h3>
      <p>{formatValue(valor)}</p>
    </Container>
  );
};

export default TotalPrice;
