import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StateCard from "./StateCard";
import IsCorrect from "./IsCorrect";
import { taskStatement } from "../../../../library/tasksData";
import useSwipe from "../../../../hooks/tasks/useSwipe";

const Statement = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);

    const total = taskStatement.length;
    const finished = index >= total;
    const current = !finished ? taskStatement[index] : null;

    const handleSwipe = useCallback((direction) => {
        const statement = taskStatement[index];
        if (!statement) return;

        const saidTrue = direction === "right";
        const answerIsCorrect = saidTrue === statement.bool;
        setFeedback({ isCorrect: answerIsCorrect, id: Date.now() });

        if (answerIsCorrect) {
            setScore((prev) => prev + 1);
        }

        setIndex((i) => i + 1);
    }, [index]);

    const swipe = useSwipe(handleSwipe);

    useEffect(() => {
        swipe.reset();
    }, [index, swipe]);

    const restart = useCallback(() => {
        setScore(0);
        setIndex(0);
        setFeedback(null);
        swipe.reset();
    }, [swipe]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "ArrowLeft" && !finished) swipe.swipe("left");
            if (event.key === "ArrowRight" && !finished) swipe.swipe("right");
            if (event.key === "Enter" && finished) restart();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [finished, restart, swipe]);

    return (
        <div className="statement">
            {/* <div className="statement__progress" aria-label={`Просмотрено ${Math.min(index, total)} из ${total}`}>
                <div className="statement__progressHeader">
                    <span>Прогресс просмотра</span>
                    <strong>{Math.min(index, total)} / {total}</strong>
                </div>
                <div className="statement__progressTrack" role="progressbar" aria-valuemin="0" aria-valuemax={total} aria-valuenow={Math.min(index, total)}>
                    <span style={{ width: `${total ? (Math.min(index, total) / total) * 100 : 0}%` }} />
                </div>
            </div> */}

            <div className="statement__backs">
                <motion.button
                    type="button"
                    className="back leftBack"
                    onClick={() => !finished && swipe.swipe("left")}
                    style={{ opacity: finished ? 0.35 : 1 }}
                    aria-label="Ложь"
                >
                    <motion.span className="back__glow" style={{ opacity: swipe.leftGlow }} />
                    <p>Ложь</p>
                </motion.button>
                <motion.button
                    type="button"
                    className="back rightBack"
                    onClick={() => !finished && swipe.swipe("right")}
                    style={{ opacity: finished ? 0.35 : 1 }}
                    aria-label="Правда"
                >
                    <motion.span className="back__glow" style={{ opacity: swipe.rightGlow }} />
                    <p>Правда</p>
                </motion.button>
            </div>

            {feedback !== null && (
                <IsCorrect
                    key={feedback.id}
                    isCorrect={feedback.isCorrect}
                    onExpire={() => setFeedback(null)}
                />
            )}

            <div className="statement__stage">
                {finished ? (
                    <div className="statement__result">
                        <h2>Раунд завершён</h2>
                        <p>
                            Верно {score} из {total}
                        </p>
                        <button type="button" onClick={restart}>
                            Ещё раз
                        </button>
                        <Link to="/">На главную</Link>
                    </div>
                ) : (
                    <StateCard
                        statement={current.statement}
                        num={index}
                        total={total}
                        swipe={swipe}
                    />
                )}
            </div>
        </div>
    );
};

export default Statement;
