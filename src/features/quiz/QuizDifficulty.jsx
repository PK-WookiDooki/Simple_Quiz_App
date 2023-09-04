import { useDispatch, useSelector } from "react-redux";
import { changeDifficulty } from "./quizSlice";

const diffLevel = ["easy", "medium", "hard"];

const QuizDifficulty = () => {
    const { difficulty } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

    const handleDifficulty = (e) => {
        dispatch(changeDifficulty(e.target.value));
    };

    return (
        <div className="card">
            <label htmlFor="level" className="text-lg font-semibold">
                {" "}
                Select Quiz Difficulty{" "}
            </label>
            <select
                id="level"
                name="level"
                value={difficulty}
                onChange={handleDifficulty}
                className="select-box"
            >
                {diffLevel.map((level, index) => {
                    return (
                        <option key={index} value={level}>
                            {" "}
                            {level}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default QuizDifficulty;
