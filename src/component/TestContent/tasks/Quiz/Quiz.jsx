import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import IsCorrect from "../Statement/IsCorrect";
import { taskPersons } from "../../../../library/tasksData";

const Navigation = ({ tasks, current, answers, onSelect }) => {
    return (
        <div className="quiz__navigation">
            <h3>Навигация</h3>
            {tasks.map((task, index) => {
                const answer = answers[index];
                const isAnswered = answer !== undefined;

                let stateClass = "";
                if (isAnswered) {
                    stateClass = answer === task.correctAnswer ? " is-correct" : " is-wrong";
                }

                return (
                    <button
                        type="button"
                        key={index}
                        className={`taskItem${index === current ? " is-current" : ""}${stateClass}`}
                        onClick={() => onSelect(index)}
                        aria-label={`Задание ${index + 1}`}
                        aria-current={index === current ? "step" : undefined}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
};

const Quiz = () => {
    const tasks = taskPersons;
    const total = tasks.length;

    const [current, setCurrent] = useState(0);
    // answers[номер вопроса] = number выбранного варианта
    const [answers, setAnswers] = useState({});
    const [feedback, setFeedback] = useState(null);

    const finished = useMemo(
        () => tasks.every((_, index) => answers[index] !== undefined),
        [answers, tasks]
    );

    const score = useMemo(
        () =>
            tasks.reduce(
                (acc, task, index) => acc + (answers[index] === task.correctAnswer ? 1 : 0),
                0
            ),
        [answers, tasks]
    );

    const handleSelect = useCallback(
        (answerNumber) => {
            if (answers[current] !== undefined) return;

            const nextAnswers = { ...answers, [current]: answerNumber };
            const answerIsCorrect = answerNumber === tasks[current].correctAnswer;

            setAnswers(nextAnswers);
            setFeedback({ isCorrect: answerIsCorrect, id: Date.now() });

            // Как в Statement: следующая карточка появляется сразу вместе с отметкой.
            const nextIndex = tasks.findIndex((_, index) => nextAnswers[index] === undefined);
            if (nextIndex !== -1) setCurrent(nextIndex);
        },
        [answers, current, tasks]
    );

    const goTo = useCallback((index) => {
        setCurrent(index);
        setFeedback(null);
    }, []);

    const clearFeedback = useCallback(() => setFeedback(null), []);

    const restart = useCallback(() => {
        setAnswers({});
        setFeedback(null);
        setCurrent(0);
    }, []);

    return (
        <div className="quiz">
            <Navigation tasks={tasks} current={current} answers={answers} onSelect={goTo} />

            <div className="quiz__stage">
                {finished ? (
                    <div className="quiz__result">
                        <h2>Тест завершён</h2>
                        <p>
                            Верно {score} из {total}
                        </p>
                        <button type="button" onClick={restart}>
                            Пройти заново
                        </button>
                        <Link to="/">На главную</Link>
                    </div>
                ) : (
                    <QuizQuestion
                        task={tasks[current]}
                        taskNumber={current + 1}
                        total={total}
                        selected={answers[current]}
                        onSelect={handleSelect}
                    />
                )}

                {/* Плашка живёт отдельно, чтобы последний ответ тоже успел показаться. */}
                <div className="quiz__feedback">
                    {feedback !== null && (
                        <IsCorrect
                            key={feedback.id}
                            isCorrect={feedback.isCorrect}
                            onExpire={clearFeedback}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
