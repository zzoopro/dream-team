import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}  

#root {
  background-color: #333;    
  font-family: "NotoSans", "NotoSans-kr", "Roboto";
}

`;

export default GlobalStyle;
