import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const DURATION = 1500;

const IsCorrect = ({ isCorrect, onExpire }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onExpire) onExpire();
        }, DURATION);

        return () => clearTimeout(timer);
    }, [isCorrect, onExpire]);

    return (
        <div
            className={`statement__isCorrect ${isCorrect ? "is-correct" : "is-incorrect"}`}
            role="status"
            aria-live="polite"
        >
            <div className="statement__isCorrectContent">
                <span className="statement__isCorrectIcon" aria-hidden="true">
                    {isCorrect ? <FaCheck /> : <MdClose />}
                </span>
                <p>{isCorrect ? "Правильно" : "Неправильно"}</p>
            </div>
            <div className="statement__isCorrectTimer">
                <span
                    className="statement__isCorrectTimerBar"
                    style={{ animationDuration: `${DURATION}ms` }}
                />
            </div>
        </div>
    );
};

export default IsCorrect;
