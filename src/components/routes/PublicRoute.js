import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useAuthCheck from "../../hooks/useAuthCheck";

function PublicRoute({ children }) {
  const checkAuth = useAuth();
  return !checkAuth ? children : <Navigate to="/inbox" />;
}

export default PublicRoute;
