import { useSelector } from "react-redux";

const CardProdutos = () => {
  const produto = useSelector((state) => state.produto);

  return (
    <div>
      {produto.map((cada, index) => (
        <div key={index}>
          <img src={cada.image} alt={cada.name} />
          <h3>{cada.name}</h3>
          <span>{cada.descricao}</span>
          <p>{cada.price}</p>
          <button>EU QUERO!</button>
        </div>
      ))}
    </div>
  );
};

export default CardProdutos;
