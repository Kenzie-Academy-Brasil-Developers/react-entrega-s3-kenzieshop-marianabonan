import { useDispatch } from "react-redux";
import formatValue from "../../utils/formatValue";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { BsPatchMinusFill, BsPatchPlusFill } from "react-icons/bs";
import { Container } from "./styles";

const CardCarrinho = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <div>
        {" "}
        <h4>{product.name}</h4>
        <p>{formatValue(product.price * product.quantity)}</p>
        <p>Quantidade: {product.quantity}</p>
        <button onClick={() => dispatch(removeFromCartThunk(product))}>
          <BsPatchMinusFill />
        </button>
        <button onClick={() => dispatch(addToCartThunk(product))}>
          {" "}
          <BsPatchPlusFill />{" "}
        </button>
      </div>
    </Container>
  );
};

export default CardCarrinho;
