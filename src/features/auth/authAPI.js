import apiSlice from "../api/apiSlice";
import { userLogedIn } from "./authSlice";

const authAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = {
            accessToken: result.data.accessToken,
            user: result.data.user,
          };
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(userLogedIn(data));
        } catch (error) {
          console.log("some error happend ! ");
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = {
            accessToken: result.data.accessToken,
            user: result.data.user,
          };
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(userLogedIn(data));
        } catch (error) {
          console.log("some error happend ! ");
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPI;
