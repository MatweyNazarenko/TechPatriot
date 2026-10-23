const QuizQuestion = (props) => {
    const {
        taskNumber,
        total,
        task,
        selected,
        onSelect,
    } = props;

    // Ответ фиксируется один раз: после выбора варианты только подсвечивают результат.
    const isAnswered = selected !== undefined;

    let answerState = "";
    if (isAnswered) {
        answerState =
            selected === task.correctAnswer ? "is-correct" : "is-wrong is-reveal";
    }

    return (
        <div className="quiz__question">
            <h2 className="quiz__label">
                Задание {taskNumber} из {total}
            </h2>

            <p className="quiz__questionText">{task.question}</p>

            <div className={`quiz__answer ${answerState}`}>
                {task.answers.map((answer) => {
                    const isSelected = selected === answer.number;
                    const isRight = answer.number === task.correctAnswer;

                    let optionState = "";
                    if (isSelected) optionState += " is-selected";
                    if (isRight) optionState += " is-right";

                    return (
                        <button
                            type="button"
                            key={answer.number}
                            className={`quiz__option${optionState}`}
                            onClick={() => onSelect(answer.number)}
                            disabled={isAnswered}
                        >
                            <span className="quiz__optionIndex">{answer.number}</span>
                            <span className="quiz__optionText">{answer.text}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizQuestion;
