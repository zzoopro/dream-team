import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }: any) => {
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
