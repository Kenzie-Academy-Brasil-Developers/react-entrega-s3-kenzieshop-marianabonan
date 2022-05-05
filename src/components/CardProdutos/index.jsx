import { useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import formatValue from "../../utils/formatValue";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { Container } from "./styles";

const CardProdutos = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <span>{product.descricao}</span>
      <section>
        <p>{formatValue(product.price)}</p>

        <button onClick={() => dispatch(addToCartThunk(product))}>
          <BsCartPlus />
        </button>
      </section>
    </Container>
  );
};

export default CardProdutos;
