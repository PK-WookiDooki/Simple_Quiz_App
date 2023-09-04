import { useSelector } from "react-redux";
import OptionsList from "./OptionsList";

const Question = ({ question, answers, totalQ }) => {
    const { currentQuestion } = useSelector((state) => state.quiz);

    return (
        <div className="card">
            <h3 className="text-xl font-medium text-black">
                {" "}
                Question {currentQuestion + 1 + " / " + totalQ}
            </h3>
            <p className="my-3 text-2xl font-semibold break-words ">
                {" "}
                {question.question}{" "}
            </p>
            <OptionsList
                question={question}
                answers={answers}
                totalQ={totalQ}
            />
        </div>
    );
};

export default Question;
