import { Container } from "./styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarrinho } from "../../store/modules/carrinho/actions";

const Button = ({ children, color, whidthMobile, ...rest }) => {
  const [cart, setCart] = useState("");
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCarrinho(cart));
  };
  return (
    <Container color={color} whidtMobile={whidthMobile} {...rest}>
      {children}
      onClick= {handleAddCart}
    </Container>
  );
};

export default Button;
