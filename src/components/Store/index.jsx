import { useSelector } from "react-redux";

import CardProdutos from "../CardProdutos";
import { Container } from "./styles";

const Store = () => {
  const { product } = useSelector((state) => state);

  return (
    <Container>
      {product.map((product) => (
        <CardProdutos key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Store;
