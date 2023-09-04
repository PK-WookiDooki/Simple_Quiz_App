import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({
        baseUrl: " https://opentdb.com",
    }),
    tagTypes: ["quiz"],
    endpoints: (builder) => ({
        getSelectedQuiz: builder.query({
            query: ({ categoryId, difficulty }) => ({
                url: `/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple `,
            }),
            providesTags: ["quiz"],
        }),
    }),
});

export const { useGetSelectedQuizQuery } = quizApi;
