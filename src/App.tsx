import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ReactRouter from "./router";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactRouter />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
