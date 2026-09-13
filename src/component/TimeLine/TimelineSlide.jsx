import useDragToScroll from "../../hooks/useDragToScroll";
import {timeTags} from "../../library/data"
const TimelineSlide = (props) => {

  const years = [];
  for (const key of Object.keys(timeTags)) {
    years.push(timeTags[key].tagTime.getFullYear());
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
      <div className="bottom">
        <ul>
          {fullYears.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimelineSlide;
