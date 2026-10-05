import { taskPersons } from "../../../library/tasksData"


const Navigation = () => {
    return (
        <div className="quiz__navigation">
            <h3>Навигация</h3>
            {taskPersons.map((item,index)=>{
                return(
                    <div className="taskItem">
                        {index}
                    </div>
                )
            })}
        </div>
    )
}



const Quiz = () => {
    return (
        <div className="quiz">
            <Navigation></Navigation>
        </div>
    )
}

export default Quiz;