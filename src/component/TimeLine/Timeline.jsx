import Title from "../AllPages/Title"
import TimelineInfo from "./TimelineInfo.";
import TimelineSlide from "./TimelineSlide";

const Timeline = ()=>{
    return(
        <>
            <Title>Timeline</Title>
            <div className="timeline">
                <TimelineInfo></TimelineInfo>
                <TimelineSlide></TimelineSlide>
            </div>

        </>
    )
}

export default Timeline;