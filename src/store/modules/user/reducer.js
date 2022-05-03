const produtos = [
  {
    name: "Coxinha de catnip",
    price: 32.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29003813/f0b1547824.jpg",
    descricao:
      "Você acha que é só você que gosta de coxinha, humano? Seu gato vai amar essa coxinha de crochê recheada de catnip!",
  },
  {
    name: "Catnip | Erva de gato",
    price: 11.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29120347/c9188371b3.jpg",
    descricao:
      "Catnip é uma erva medicinal da família do hortelã que pode tanto aliviar o stress para gatos muito ativos, que vivem arranhando e danificando objetos da casa",
  },
  {
    name: "Sardinha de catnip em lata",
    price: 58.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/73488994/bcd23938c5.jpg",
    descricao:
      "A lata vem com 4 sardinhas recheadas com 2g de catnip cada, as sardinhas são de feltro e feitas à mão. A erva você já sabe: tem o selo erva da boa!",
  },
  {
    name: "Fantasia de dinossauro verde",
    price: 99.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29095759/c530bedfc7.jpg",
    descricao:
      "Seu gato cansou? Então ele pode virar um dinossauro! Essa roupa é quentinha, confortável e fácil de vestir.",
  },
  {
    name: "Moletom cinza e azul",
    price: 89.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29119783/c27b6209c2.jpg",
    descricao:
      "Pra não dizer que só tenho fantasias, aqui vai um moletom básico e casual para o dia-a-dia do seu bichano descolado.",
  },
  {
    name: "Fantasia juba de leão",
    price: 59.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29095720/278a028096.jpg",
    descricao:
      "Seu gato também cansou de ser gato? Ele pode virar um leão! A juba é ajustável com fecho de velcro",
  },
  {
    name: "Fantasia de unicórnio",
    price: 59.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/29004299/ce071dd7f0.jpg",
    descricao:
      "Ele pode virar um unicórnio! O fecho é de velcro, ajustável à cabeça do seu gato. É super leve, fique tranquilo, o chifre não pesa! ",
  },
  {
    name: "Fantasia de vaca",
    price: 99.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/32363745/774da1dfb9.jpg",
    descricao:
      "Seu gato cansou? Então ele pode virar uma vaca! Essa roupa confortável, quentinho e fácil de vestir.",
  },
  {
    name: "Castelo papelão",
    price: 2.0,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/56581820/e7ca48f848.jpg",
    descricao:
      "Ótimo para por no jardim e dormir abraçado com a Mina, sim pessoas pequenas cabem dentro.",
  },
  {
    name: "Tv tubo de papelão",
    price: 59.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/66773634/dc96176802.jpg",
    descricao:
      "Você não vai mais mudar de canal, humano! Eu sei que você já assistia ao seu gato o dia inteiro, mas agora vai ser ainda mais legal!",
  },
  {
    name: "Nave espacial de papelão",
    price: 59.9,
    image:
      "https://cdn.awsli.com.br/1000x1000/31/31979/produto/57597261/c3258574c0.jpg",
    descricao:
      "A nave espacial do seu gato aterrissou, humano! Se o seu gato também gosta de papelão, com certeza ele vai amar.",
  },
];

const produtosReducer = (state = produtos, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default produtosReducer;
