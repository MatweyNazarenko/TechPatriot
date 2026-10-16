

const IsCorrect = (props) => {
    const {
        isCorrect,
    } = props;

    return (
        <div
            style={{
                color: isCorrect ? 'rgb(134, 239, 172)' : 'rgb(252, 165, 165)'
            }}
            className="statement__isCorrect"
        >
            {isCorrect ? 'Правильно' : 'Неправильно'}
        </div>
    )
}

export default IsCorrect;