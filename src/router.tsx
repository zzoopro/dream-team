import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Login from "./pages/Login";
import AnimatedRoutes from "./AnimatedRoutes";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default ReactRouter;
