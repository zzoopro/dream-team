import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}  

#root {
  background-color: #333;  
}

* {
  font-family: "NotoSans-kr" "NotoSans" "Roboto";  
}

a {
  text-decoration: none;
  color: inherit;
  font-family: "NotoSans-kr";
}
`;

export default GlobalStyle;
