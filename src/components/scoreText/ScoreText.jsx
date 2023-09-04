const ScoreText = ({ desc, point }) => {
    return (
        <div className=" grid grid-cols-3 text-xl font-semibold">
            <p className="min-w-max"> {desc} </p>
            <p> - </p>
            <p> {point} </p>
        </div>
    );
};

export default ScoreText;
