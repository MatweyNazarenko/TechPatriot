import useDragToScroll from "../../hooks/useDragToScroll";
import { timeTags } from "../../library/data";
import { clamp, monthsNames } from "../../library/timeControl";
import EventPill from "./EventPill";

const pillWidth = 128;
const rowHeight = 44;
const yearMinWidth = 300;

const TimelineSlide = (props) => {
  // const years = [];
  // for (const key of Object.keys(timeTags)) {
  //   years.push(timeTags[key]?.tagTimeStart?.getFullYear());
  // }
  // years.sort((a, b) => a - b);

  // const fullYears = [];
  // for (let i = years[0]; i <= years[years.length - 1]; i++) {
  //   fullYears.push(i);
  // }

  // console.log(fullYears);

  const scrollRef = useDragToScroll();

  const events = timeTags
    .map((value) => ({
      id: crypto.randomUUID(),
      ...value,
    }))
    .sort((a, b) => a.tagTimeStart.getTime() - b.tagTimeStart.getTime());

  if (events.length === 0) return null;

  const startYear = events[0].tagTimeStart.getFullYear();
  const endYear = events[events.length - 1].tagTimeStart.getFullYear();
  const totalYears = Math.max(endYear - startYear + 1, 1);

  const fullYears = [];
  for (let year = startYear; year <= endYear; year++) {
    fullYears.push(year);
  }

  const totalTimelineWidth = totalYears * yearMinWidth;

  const getXPosition = (date) => {
    const currentYear = date.getFullYear();
    const yearProgress = date.getMonth() / 12 + date.getDate() / 365;
    const yearIndex = currentYear - startYear + yearProgress;
    return (yearIndex / totalYears) * totalTimelineWidth;
  };

  const rows = [];

  const positionedEvents = events.map((item) => {
    const centerX = getXPosition(item.tagTimeStart);
    const startX = centerX - pillWidth / 2;
    const endX = centerX + pillWidth / 2 + 12;

    let assignedRow = 0;

    while (true) {
      if (!rows[assignedRow]) {
        rows[assignedRow] = endX;
        break;
      }
      if (startX >= rows[assignedRow]) {
        rows[assignedRow] = endX;
        break;
      }
      assignedRow++;
    }

    return {
      ...item,
      leftPx: centerX,
      rowIndex: assignedRow,
    };
  });

  const topAreaHeight = Math.max(rows.length * rowHeight + 20, 80);

  return (
    <div className="timeline__slideBar" ref={scrollRef}>
      <div
        className="top"
        style={{
          width: `${totalTimelineWidth}px`,
          height: `${topAreaHeight}px`,
        }}
      >
        {positionedEvents.map((item) => {
          const dateText = item.tagTimeEnd
            ? `${item.tagTimeStart.getDate()} ${monthsNames[item.tagTimeStart.getMonth()]} - ${item.tagTimeEnd.getDate()} ${monthsNames[item.tagTimeEnd.getMonth()]}`
            : `${item.tagTimeStart.getDate()} ${monthsNames[item.tagTimeStart.getMonth()]}`;

          return (
            <EventPill
              key={item.id}
              id={item.id}
              leftOffset={`${item.leftPx}px`}
              topOffset={`${item.rowIndex * rowHeight}px`}
            >
              {dateText}
            </EventPill>
          );
        })}
      </div>
      <div 
        className="bottom"
        style={
          {
            width: `${totalTimelineWidth}px`,
          }
        }
      >
        {fullYears.map((item) => {
          return <div 
            key={crypto.randomUUID()}
            style={{
              width: `${yearMinWidth}`,
            }}
          >{item}</div>;
        })}
      </div>
    </div>
  );
};

export default TimelineSlide;
