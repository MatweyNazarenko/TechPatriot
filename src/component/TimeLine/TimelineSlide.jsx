import { useEffect } from "react";
import useDragToScroll from "../../hooks/useDragToScroll";
import useTimelineZoom from "../../hooks/Timeline/useTimelineZoom";
import { timeTags } from "../../library/data";
import useTimelineLayout from "../../hooks/Timeline/useTimelineLayot";
import { formatEventDate } from "../../library/timeControl";
import TimelineAxe from "./TimelineAxe";
import EventPill from "./EventPill";

const height_timeline = 300;

const TimelineSlide = ({ selectEvent, selectedId }) => {
    const scrollRef = useDragToScroll();
    const { pxPerMs, zoomIn, zoomOut, resetZoom, zoomPercentage } =
        useTimelineZoom(scrollRef);

    const {
        positionedEvents,
        totalWidth,
        minTime,
        maxTime,
        rowStep,
        paddingX,
        pillHeight,
    } = useTimelineLayout({
        eventsData: timeTags,
        pxPerMs,
        containerHeight: height_timeline,
    });

    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller || !selectedId) return;

        const active = positionedEvents.find((item) => item.id === selectedId);
        if (!active) return;

        const target =
            active.leftPx + active.widthPx / 2 - scroller.clientWidth / 2;

        scroller.scrollTo({
            left: Math.max(0, target),
            behavior: "smooth",
        });
    }, [selectedId, positionedEvents, scrollRef]);

    if (!timeTags || timeTags.length === 0) return null;

    return (
        <div className="timeline__containerSlide">
            <div className="timeline__toolbar">
                {/* <div className="timeline__zoom">
                    <button
                        type="button"
                        className="timeline__zoomBtn"
                        onClick={zoomOut}
                        aria-label="Уменьшить масштаб"
                    >
                        −
                    </button>
                    <button
                        type="button"
                        className="timeline__zoomValue"
                        onClick={resetZoom}
                        title="Сбросить масштаб"
                    >
                        {zoomPercentage}%
                    </button>
                    <button
                        type="button"
                        className="timeline__zoomBtn"
                        onClick={zoomIn}
                        aria-label="Увеличить масштаб"
                    >
                        +
                    </button>
                </div> */}
            </div>

            <div className="timeline__slideBar" ref={scrollRef}>
                <div
                    className="top"
                    style={{
                        width: `${totalWidth}px`,
                        height: `${height_timeline}px`,
                    }}
                >
                    {positionedEvents.map((item) => (
                        <EventPill
                            onSelected={selectEvent}
                            key={item.id}
                            idName={item.id}
                            title={item.tagTitle}
                            isActive={item.id === selectedId}
                            leftOffset={`${item.leftPx}px`}
                            topOffset={`${item.rowIndex * rowStep + 10}px`}
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
                />
            </div>
        </div>
    );
};

export default TimelineSlide;
