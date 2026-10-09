import useDragToScroll from "../../hooks/useDragToScroll";
import useTimelineZoom from "../../hooks/Timeline/useTimelineZoom";
import { timeTags } from "../../library/data";
import useTimelineLayout from "../../hooks/Timeline/useTimelineLayot";
import { formatEventDate } from "../../library/timeControl";
import TimelineAxe from "./TimelineAxe";
import EventPill from "./EventPill";

const height_timeline = 300;

const TimelineSlide = (props) => {
  const{
    selectEvent
  }=props;

  const scrollRef = useDragToScroll();

  const { pxPerMs } =
    useTimelineZoom(scrollRef);

  const { positionedEvents, totalWidth, minTime, maxTime, rowStep, paddingX, pillHeight } =
    useTimelineLayout({
      eventsData: timeTags,
      pxPerMs,
      containerHeight: height_timeline
    });

  if (!timeTags || timeTags.length === 0) return null;


  return (
    <div className="timeline__containerSlide">
      <div className="timeline__slideBar" ref={scrollRef}>
        <div
          className="top"
          style={{
            width: `${totalWidth}px`,
            height: `${height_timeline}px`,
          }}
        > 

          {positionedEvents.map((item) =>(
            <EventPill
              onSelected={selectEvent}
              key={item.id}
              idName={item.id}
              leftOffset={`${item.leftPx}px`}
              topOffset={`${item.rowIndex * rowStep+10}px`}
              widthPx={`${item.widthPx}px`}
              heightPx={`${pillHeight}px`}
            >
              {formatEventDate(item.tagTimeStart, item.tagTimeEnd)}
            </EventPill>
          ))}
        </div>

        <TimelineAxe
          minTime={minTime}
          maxTime={maxTime}
          pxPerMs={pxPerMs}
          totalWidth={totalWidth}
          paddingX={paddingX}
        ></TimelineAxe>
      </div>
    </div>
  );
};

export default TimelineSlide;
