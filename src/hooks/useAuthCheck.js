import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../features/auth/authSlice";
function useAuthCheck() {
  const dispatch = useDispatch();
  const [authcheck, setAuthCheck] = useState(false);
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    if (localAuth) {
      const user = JSON.parse(localAuth);
      if (user?.accessToken && user?.user) {
        dispatch(
          actions.userLogedIn({
            user: user?.user,
            accessToken: user?.accessToken,
          })
        );
      }
    }

    setAuthCheck(true);
  }, [dispatch]);

  return authcheck;
}

export default useAuthCheck;
