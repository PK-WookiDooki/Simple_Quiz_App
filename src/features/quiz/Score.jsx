import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "./quizSlice";
import { PrimaryBtn, SText } from "../../components";

const Score = ({ totalQ }) => {
    const { score } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetQuiz());
    };

    const totalScore = ((score * 100) / totalQ).toFixed(1) + " % ";

    const wrongAnswers = totalQ - score;

    return (
        <div className="card">
            <h2 className="text-xl font-bold mb-5 text-black">Result</h2>

            <div className="flex flex-col gap-2 mb-3">
                <SText desc={"Total Questions"} point={totalQ} />
                <SText desc={"Total Score"} point={totalScore} />
                <SText desc={"Correct Answers"} point={score} />
                <SText desc={"Wrong Answers"} point={wrongAnswers} />
            </div>

            <div className=" flex justify-center">
                <PrimaryBtn
                    title={"Reset"}
                    event={handleReset}
                    btnType={"reset-btn"}
                />
            </div>
        </div>
    );
};

export default Score;
