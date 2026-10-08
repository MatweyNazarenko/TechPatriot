import useTimelineState from "../../hooks/Timeline/useTimelineState";
import { timeTags } from "../../library/data.jsx";
import Title from "../AllPages/Title"
import TimelineInfo from "./TimelineInfo.";
import TimelineSlide from "./TimelineSlide";

const Timeline = ()=>{

    const { activeEvent, selectEvent } = useTimelineState(timeTags, timeTags[0].id);

    return(
        <>
            <Title>Timeline</Title>
            <div className="timeline">
                <TimelineInfo activeEvent={activeEvent}></TimelineInfo>
                <TimelineSlide selectEvent={selectEvent}></TimelineSlide>
            </div>

        </>
    )
}

export default Timeline;