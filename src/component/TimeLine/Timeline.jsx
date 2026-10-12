import useTimelineState from "../../hooks/Timeline/useTimelineState";
import { timeTags } from "../../library/data.jsx";
import Title from "../AllPages/Title";
import TimelineInfo from "./TimelineInfo.";
import TimelineSlide from "./TimelineSlide";

const Timeline = () => {
    const { selected, activeEvent, selectEvent } = useTimelineState(
        timeTags,
        timeTags[0]?.id
    );

    return (
        <>
            <Title>Хронология</Title>
            <div className="timeline">
                <TimelineInfo activeEvent={activeEvent} />
                <TimelineSlide
                    selectEvent={selectEvent}
                    selectedId={selected}
                />
            </div>
        </>
    );
};

export default Timeline;
