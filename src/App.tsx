import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ReactRouter from "./router";
import GlobalStyle from "./css/GlobalStyle";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ReactRouter />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
