import { Routes, Route, useLocation } from "react-router-dom";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
