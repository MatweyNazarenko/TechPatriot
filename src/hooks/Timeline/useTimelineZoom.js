import { useEffect, useState } from "react";
import { clamp } from '../../library/timeControl'

const useTimelineZoom = ( ref, initialPxPerMs = 0.000000008, minPx = 0.000001, maxPx = 0.000000006)=>{


    const [pxPerMs, setPxPerMs] = useState(initialPxPerMs);

    const handleWheel = (event) =>{
        if(event.ctrlKey || event.metaKey){
            event.preventDefault();
            const delta = event.deltaY < 0 ? 1.25 : 0.8;
            setPxPerMs((prev)=> clamp(prev*delta, minPx, maxPx));
        }
    }

    useEffect(()=>{
        const element = ref?.current;
        if(!element) return;

        element.addEventListener("wheel", handleWheel, {passive: false});

        return ()=>element.removeEventListener("wheel", handleWheel);

    }, [ref, minPx, maxPx])

    const zoomIn = () => setPxPerMs((prev) => clamp(prev * 1.3, minPx, maxPx));
    const zoomOut = () => setPxPerMs((prev) => clamp(prev * 0.7, minPx, maxPx));
    const resetZoom = () => setPxPerMs(initialPxPerMs);

    const zoomPercentage = Math.round((pxPerMs / initialPxPerMs) * 100);

    return {
        zoomIn,
        zoomPercentage,
        resetZoom,
        zoomOut,
        pxPerMs
    }

}

export default useTimelineZoom;