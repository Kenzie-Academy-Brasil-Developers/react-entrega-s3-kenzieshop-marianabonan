import { GiShoppingBag } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleCard = () => {
    history.push("/carrinho");
  };
  const handleHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="title"> Kenzie Cat </h1>
      <section>
        <button className="icons_header" onClick={handleCard}>
          <GiShoppingBag />
        </button>
        <button className="icons_header" onClick={handleHome}>
          <BsFillHouseFill />
        </button>
      </section>
    </Container>
  );
};
export default Header;
