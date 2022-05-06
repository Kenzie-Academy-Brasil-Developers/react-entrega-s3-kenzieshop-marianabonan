import { createGlobalStyle } from "styled-components";
import fonteGatito from "../assets/fonts/Catlove.ttf";

export default createGlobalStyle`
*{
    margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
}
ol, ul,li {
    list-style: none;
}

img{
    height: 390px;
    width: 290px;
    
}
h1, h3{
    font-family: "FonteGatito";
}
h3{
    font-size: 25px;
    color: red;
}
@font-face {
    font-family: "FonteGatito" ;
    src: url(${fonteGatito});
}
`;
