import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../quizdata.json";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories,
        categoryId: 9,
    },
    reducers: {
        setCategoryId: (state, { payload }) => {
            state.categoryId = payload;
        },
    },
});

export const { setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
