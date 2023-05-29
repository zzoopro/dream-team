import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }: any) => {
  return false ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
