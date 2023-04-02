import { useSelector } from "react-redux";
function useAuth() {
  const auth = useSelector((state) => state.auth);
  return auth?.accessToken && auth?.user ? true : false;
}

export default useAuth;
