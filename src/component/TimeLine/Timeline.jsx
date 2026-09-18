import useTimelineState from "../../hooks/Timeline/useTimelineState";
import { timeTags } from "../../library/data";
import Title from "../AllPages/Title"
import TimelineInfo from "./TimelineInfo.";
import TimelineSlide from "./TimelineSlide";

const Timeline = ()=>{

    const { activeEvent, selectEvent } = useTimelineState(timeTags);

    return(
        <>
            <Title>Timeline</Title>
            <div className="timeline">
                <TimelineInfo activeEvent={activeEvent}></TimelineInfo>
                <TimelineSlide onSelectedEvent={selectEvent}></TimelineSlide>
            </div>

        </>
    )
}

export default Timeline;