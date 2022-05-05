import { useSelector } from "react-redux";
const TotalPrice = () => {
  const { cart } = useSelector((state) => state);
  const valor = cart.reduce(
    (acm, { price, quantity }) => acm + price * quantity,
    0
  );

  console.log(valor);
  return (
    <div>
      <h4>Valor Total</h4>
      <p>{valor}</p>
    </div>
  );
};

export default TotalPrice;
