import { useCallback, useState } from "react";

const useTimelineState = (props) => {
    const {
        eventsData = [],
        initialSelectedId = null
    } = props;

    const [selected, setSelected] = useState(()=>{
        if(initialSelectedId) return initialSelectedId;
        return eventsData.length > 0 ? eventsData[0].id : null;
    });

    const selectEvent = useCallback((id) =>{
        if(!id) return;
        setSelected(id)
    }, []) ;

    const activeEvent = ()=>{
        return eventsData.find((event)=>event.id === selected) || null;
    }

    return {
        selected,
        activeEvent,
        selectEvent
    }

}

export default useTimelineState;