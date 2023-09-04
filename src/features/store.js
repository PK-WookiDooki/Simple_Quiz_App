import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz/quizSlice";
import categorySlice from "./category/categorySlice";
import { quizApi } from "./quiz/quizApi";

export const store = configureStore({
    reducer: {
        quiz: quizSlice,
        category: categorySlice,
        [quizApi.reducerPath]: quizApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quizApi.middleware),
});
