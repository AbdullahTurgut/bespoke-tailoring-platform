import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
