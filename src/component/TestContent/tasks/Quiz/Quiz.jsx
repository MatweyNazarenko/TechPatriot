import { taskPersons } from "../../../../library/tasksData"
import QuizQuestion from "./QuizQuestion"


const Navigation = ({tasksType}) => {
    return (
        <div className="quiz__navigation">
            <h3>Навигация</h3>
            {tasksType.map((item,index)=>{
                return(
                    <div className="taskItem">
                        {index+1}
                    </div>
                )
            })}
        </div>
    )
}



const Quiz = () => {
    return (
        <div className="quiz">
            <QuizQuestion taskNumber={1}></QuizQuestion>
        </div>
    )
}

export default Quiz;