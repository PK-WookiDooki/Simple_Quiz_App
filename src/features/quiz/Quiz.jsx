import { useSelector } from "react-redux";
import Question from "./Question";
import Score from "./Score";
import { useGetSelectedQuizQuery } from "./quizApi";
import QuizDifficulty from "./QuizDifficulty";
import CategoriesList from "../category/CategoriesList";

const Quiz = () => {
    const { currentQuestion, quizEnd, difficulty } = useSelector(
        (state) => state.quiz
    );

    const { categoryId } = useSelector((state) => state.category);
    const { data, isLoading } = useGetSelectedQuizQuery({
        categoryId,
        difficulty,
    });
    const apiQ = data?.results;

    const ansOptions = apiQ
        ? [
              apiQ[currentQuestion].correct_answer,
              apiQ[currentQuestion].incorrect_answers,
          ]
              .flat()
              .sort(() => Math.random() - 0.5)
        : "";

    const totalQ = apiQ?.length;
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full ">
                <h2 className=" max-w-xl mx-auto p-5 w-full bg-white rounded-md text-center text-2xl font-semibold">
                    {" "}
                    Loading . . . Please Wait!
                </h2>
            </div>
        );
    }
    return (
        <div className="mx-auto">
            <h2 className="max-w-xl mx-auto text-2xl font-semibold mb-5 text-white">
                {" "}
                Simple Quiz App{" "}
            </h2>

            {!quizEnd ? (
                <div className="">
                    <QuizDifficulty />
                    <CategoriesList />
                    <Question
                        question={apiQ[currentQuestion]}
                        answers={ansOptions}
                        totalQ={totalQ}
                    />
                </div>
            ) : (
                <Score totalQ={totalQ} />
            )}
        </div>
    );
};

export default Quiz;
