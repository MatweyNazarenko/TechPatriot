import useDragToScroll from "../../hooks/useDragToScroll";
import { timeTags } from "../../library/data";
import { clamp, monthsNames } from "../../library/timeControl";
import EventPill from "./EventPill";

const TimelineSlide = (props) => {

  const years = [];
  for (const key of Object.keys(timeTags)) {
    years.push(timeTags[key]?.tagTimeStart?.getFullYear());
  }
  years.sort((a, b) => a - b);

  const fullYears = [];
  for (let i = years[0]; i <= years[years.length - 1]; i++) {
    fullYears.push(i);
  }

  console.log(fullYears);

  const scrollRef = useDragToScroll();


  return (
    <div className="timeline__slideBar" ref={scrollRef}>
      <div className="top">
        {Object.values(timeTags)?.map((item)=>{
          const id = crypto.randomUUID();
          return (
            <EventPill key={id} id={id}>
              {item.tagTimeEnd 
                  ? `${item.tagTimeStart.getDate()} ${monthsNames[item.tagTimeStart.getMonth()]} - ${item.tagTimeEnd.getDate()} ${monthsNames[item.tagTimeEnd.getMonth()]}` 
                  : `${item.tagTimeStart.getDate()} ${monthsNames[item.tagTimeStart.getMonth()]}`}
            </EventPill>
          )
        })}
      </div>
      <div className="bottom">
        {fullYears?.map((item) => {
          return <div key={crypto.randomUUID()}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default TimelineSlide;
