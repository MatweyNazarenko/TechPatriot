import StateCard from "./StateCard";
import { taskStatement } from '../../../../library/tasksData'
import { useCallback, useEffect, useState } from "react";
import useSwipe from "../../../../hooks/tasks/useSwipe";
const Statement = () => {



    const [index, setIndex] = useState(0);

    const total = taskStatement.length;
    const current = taskStatement[index];
    const finished = index >= total;

    const swipe = useSwipe(useCallback((direction) => {
        setIndex((i) => {
            const statement = taskStatement[i];
            if (!statement) return i;

            const correct = (dir === 'right') === statement.bool;
            return i;
        });
        setTimeout(() => {
            setIndex((i) => i + 1);
        }, 300);
    },
        []))

    useEffect(() => {
        swipe.reset();
    }, [index]);

    const restart = () => {
        setIndex(0);
        swipe.reset();
    }


    useEffect(() => {
        const onKeyDown = (event) => {
            if (e.key === 'ArrowLeft') swipe.swipe('left');
            if (e.key === 'ArrowRight') swipe.swipe('right');
            if (e.key === 'Enter' && finished) game.restart();
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    })


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
                statement={taskStatement[index].statement}
                num={0}
                swipe={swipe}
            ></StateCard>
        </div>
    )
}

export default Statement;