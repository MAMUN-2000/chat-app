import apiSlice from "../api/apiSlice";

const conversationAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getconversation: builder.query({
      query: ({ email, data }) => ({
        url: `conversations/?participants_like=${email}&_sort=timestamp&_page=1&&_limit=5`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useGetconversationQuery } = conversationAPI;
