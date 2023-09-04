import { useState } from "react";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import {
    increaseScore,
    nextQuestion,
    previousQuestion,
    resetQuiz,
} from "./quizSlice";
import { PrimaryBtn } from "../../components";

const OptionsList = ({ question, answers, totalQ }) => {
    const { currentQuestion, selectedAnswers, score } = useSelector(
        (state) => state.quiz
    );

    const alreadySelectedOpt =
        selectedAnswers[currentQuestion] !== undefined
            ? selectedAnswers[currentQuestion + 1]
            : null;

    const [selectedOpt, setSelectedOpt] = useState(null);
    const dispatch = useDispatch();

    const handleOptChange = (e) => {
        setSelectedOpt(e.target.value);
    };
    const handleNext = (e) => {
        e.preventDefault();
        checkAnswer(e.target.value);
        dispatch(nextQuestion({ totalQ, selectedOpt }));
        alreadySelectedOpt === undefined
            ? setSelectedOpt(null)
            : setSelectedOpt(alreadySelectedOpt);
    };
    const handlePrevious = (e) => {
        e.preventDefault();
        dispatch(previousQuestion());
        setSelectedOpt(selectedAnswers[currentQuestion - 1]);
    };

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetQuiz());
    };

    const checkAnswer = () => {
        const isCorrect = question?.correct_answer === selectedOpt;
        dispatch(increaseScore(isCorrect));
    };

    return (
        <form onSubmit={handleNext}>
            <div className=" grid md:grid-cols-2 gap-3 mb-5">
                {answers.map((item, index) => {
                    return (
                        <Option
                            key={index}
                            answer={item}
                            selectedOpt={selectedOpt}
                            handleOptChange={handleOptChange}
                        />
                    );
                })}
            </div>
            <div className={`flex items-center justify-between `}>
                <PrimaryBtn
                    event={handlePrevious}
                    title={"Back"}
                    disabledStatus={currentQuestion === 0}
                    btnType={"submit-btn"}
                />

                <PrimaryBtn
                    title={"Reset"}
                    event={handleReset}
                    btnType={"reset-btn"}
                />

                <PrimaryBtn
                    title="Next"
                    disabledStatus={selectedOpt === null}
                    quizEnd={currentQuestion === totalQ - 1}
                    btnType={"submit-btn"}
                />
            </div>
        </form>
    );
};

export default OptionsList;
