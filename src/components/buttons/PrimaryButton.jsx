import "./button.css";
const PrimaryButton = ({
    title,
    event,
    disabledStatus,
    isHide,
    quizEnd,
    btnType,
}) => {
    return (
        <button
            onClick={event}
            disabled={disabledStatus}
            className={` base-btn ${disabledStatus ? "disabled" : btnType} ${
                isHide ? "hidden" : "block"
            }  `}
        >
            {quizEnd ? "Submit" : title}
        </button>
    );
};

export default PrimaryButton;
