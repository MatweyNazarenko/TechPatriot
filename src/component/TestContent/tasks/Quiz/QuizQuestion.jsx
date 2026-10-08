const QuizQuestion = (props)=>{

    const {
        taskNumber,
        task
    } = props;

    return(
        <div className="quiz__question">
            <span>Задание {taskNumber}</span>
        </div>
    )
}

export default QuizQuestion;

