import Coxinha from "../../../assets/img/crochicodecatnip.png";
import Erva from "../../../assets/img/ervadogato.png";
import Castelo from "../../../assets/img/gatocastelo.png";
import Leao from "../../../assets/img/gatoleaozinho.png";
import Roxo from "../../../assets/img/gatomoletonroxo.png";
import Dino from "../../../assets/img/gatossauroverde.png";
import Tv from "../../../assets/img/gatoTV.png";
import Uni from "../../../assets/img/gatounicornio.png";
import Vaca from "../../../assets/img/gatovaquinha.png";
import Sardinha from "../../../assets/img/sardinhasdecatnip.png";

const initialState = [
  {
    name: "Coxinha de catnip",
    price: 32.9,
    image: Coxinha,
    descricao:
      "Você acha que é só você que gosta de coxinha, humano? Seu gato vai amar essa coxinha de crochê recheada de catnip!",
    id: 1,
  },
  {
    name: "Catnip | Erva de gato",
    price: 11.9,
    image: Erva,
    descricao:
      "Catnip é uma erva medicinal da família do hortelã que pode tanto aliviar o stress para gatos muito ativos, que vivem arranhando e danificando objetos da casa",
    id: 2,
  },
  {
    name: "Sardinha de catnip",
    price: 58.9,
    image: Sardinha,
    descricao:
      "A lata vem com 4 sardinhas recheadas com 2g de catnip cada, as sardinhas são de feltro e feitas à mão. A erva você já sabe: tem o selo erva da boa!",
    id: 3,
  },
  {
    name: "Fantasia de dinossauro",
    price: 99.9,
    image: Dino,
    descricao:
      "Seu gato cansou? Então ele pode virar um dinossauro! Essa roupa é quentinha, confortável e fácil de vestir.",
    id: 4,
  },
  {
    name: "Moletom branco e roxo",
    price: 89.9,
    image: Roxo,
    descricao:
      "Pra não dizer que só tenho fantasias, aqui vai um moletom básico e casual para o dia-a-dia do seu bichano descolado.",
    id: 5,
  },
  {
    name: "Fantasia juba de leão",
    price: 59.9,
    image: Leao,
    descricao:
      "Seu gato também cansou de ser gato? Ele pode virar um leão! A juba é ajustável com fecho de velcro",
    id: 6,
  },
  {
    name: "Fantasia de unicórnio",
    price: 59.9,
    image: Uni,
    descricao:
      "Ele pode virar um unicórnio! O fecho é de velcro, ajustável à cabeça do seu gato. É super leve, fique tranquilo, o chifre não pesa! ",
    id: 7,
  },
  {
    name: "Fantasia de vaca",
    price: 99.9,
    image: Vaca,
    descricao:
      "Seu gato cansou? Então ele pode virar uma vaca! Essa roupa confortável, quentinho e fácil de vestir.",
    id: 8,
  },
  {
    name: "Castelo papelão",
    price: 2.0,
    image: Castelo,
    descricao:
      "Ótimo para por no jardim e dormir abraçado com a Mina, sim pessoas pequenas cabem dentro.",
    id: 9,
  },
  {
    name: "Tv tubo de papelão",
    price: 59.9,
    image: Tv,
    descricao:
      "Você não vai mais mudar de canal, humano! Eu sei que você já assistia ao seu gato o dia inteiro, mas agora vai ser ainda mais legal!",
    id: 10,
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
