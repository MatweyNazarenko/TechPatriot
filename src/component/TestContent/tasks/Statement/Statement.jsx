import StateCard from "./StateCard";
import { taskStatement } from '../../../../library/tasksData'
const Statement = () => {
    return (
        <div className="statement">
            <div className="statement__backs">
                <div className="back leftBack">
                    <p>Ложь</p>
                </div>
                <div className="back rightBack">
                    <p>Правда</p>
                </div>
            </div>
            <StateCard 
                statement={taskStatement[0].statement} 
                num={0}
            ></StateCard>
        </div>
    )
}

export default Statement;