import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../quizdata.json";

const initialState = {
    questions,
    currentQuestion: 0,
    score: 0,
    quizEnd: false,
    selectedAnswers: [],
    difficulty: "easy",
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        increaseScore: (state, { payload }) => {
            if (payload === true) {
                state.score += 1;
            }
        },
        nextQuestion: (state, { payload }) => {
            const { totalQ, selectedOpt } = payload;
            state.selectedAnswers[state.currentQuestion] = selectedOpt;
            if (state.currentQuestion < totalQ - 1) {
                state.currentQuestion += 1;
            } else {
                state.quizEnd = true;
            }
        },
        previousQuestion: (state) => {
            if (state.currentQuestion > 0) {
                state.currentQuestion -= 1;
                state.score -= 1;
            }
        },
        resetQuiz: (state) => {
            state.quizEnd = false;
            state.currentQuestion = 0;
            state.score = 0;
            state.selectedAnswers = [];
            state.difficulty = "easy";
        },

        changeDifficulty: (state, { payload }) => {
            state.difficulty = payload;
        },
    },
});

export const {
    nextQuestion,
    resetQuiz,
    previousQuestion,
    changeDifficulty,
    increaseScore,
} = quizSlice.actions;

export default quizSlice.reducer;
