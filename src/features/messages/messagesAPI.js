import apiSlice from "../api/apiSlice";

const messagesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: ({ id, data }) => ({
        url: `messages/?conversationId=${id}&_sort=timestamp&_page=1&&_limit=5`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useGetMessagesQuery } = messagesAPI;
