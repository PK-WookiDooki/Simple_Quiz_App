const Option = ({ answer, handleOptChange, selectedOpt }) => {
    return (
        <div className="flex gap-1 items-center">
            <input
                type="radio"
                name="answer"
                id={answer}
                value={answer}
                onChange={handleOptChange}
                checked={selectedOpt === answer}
                className="hidden"
            />
            <label
                htmlFor={answer}
                className={` cursor-pointer p-1 w-full text-center rounded-full   ${
                    selectedOpt === answer
                        ? "bg-emerald-600 text-white"
                        : " text-emerald-600"
                } border border-emerald-600`}
            >
                {" "}
                {answer}{" "}
            </label>
        </div>
    );
};

export default Option;
