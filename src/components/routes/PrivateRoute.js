import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const checkAuth = useAuth();
  return checkAuth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
