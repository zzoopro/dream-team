import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ReactRouter from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ReactRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
