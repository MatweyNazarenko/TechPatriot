import { useCallback, useState, useMemo } from "react";

const useTimelineState = ( eventsData = [], initialSelectedId = null) => {

    const [selected, setSelected] = useState(()=>{
        if(initialSelectedId) return initialSelectedId;
        return eventsData.length > 0 ? eventsData[0].id : null;
    });

    const selectEvent = useCallback((id) =>{
        if(!id) return null;
        setSelected(id)
    }, []) ;

    const activeEvent = useMemo(()=>{
        return eventsData.find((event)=>event.id === selected) || null;
    }, [eventsData, selected])

    return {
        selected,
        activeEvent,
        selectEvent
    }

}

export default useTimelineState;