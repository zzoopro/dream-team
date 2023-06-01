import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Auth from "./pages/Auth";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
