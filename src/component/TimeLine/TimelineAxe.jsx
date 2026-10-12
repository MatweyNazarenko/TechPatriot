import { dayToMs, yearToDays, monthsNames } from "../../library/timeControl";

const TimelineAxe = (props) => {
    const { minTime, maxTime, pxPerMs, totalWidth, paddingX = 80 } = props;

    if (!minTime || !maxTime || !pxPerMs) return null;

    const gridGapPx = 100;
    const isDayLevel = pxPerMs > 0.00000004;
    const isMonthLevel = pxPerMs > 0.00000001;

    const ticks = [];
    const current = new Date(minTime);
    current.setMonth(0, 1);
    current.setHours(0, 0, 0, 0);

    const limitMs = maxTime + yearToDays * dayToMs;
    let lastRenderedPx = -Infinity;

    while (current.getTime() <= limitMs) {
        const currentMs = current.getTime();
        const leftPx = (currentMs - minTime) * pxPerMs + paddingX;

        let label = current.getFullYear().toString();
        if (isDayLevel) {
            label = `${current.getDate()} ${monthsNames[current.getMonth()]} ${current.getFullYear()}`;
        } else if (isMonthLevel) {
            label = `${monthsNames[current.getMonth()]} ${current.getFullYear()}`;
        }

        if (leftPx - lastRenderedPx >= gridGapPx) {
            ticks.push(
                <div
                    key={currentMs}
                    className="timeline__tick"
                    style={{ position: "absolute", left: `${leftPx}px` }}
                >
                    <span className="timeline__tick-line" />
                    <span className="timeline__tick-label">{label}</span>
                </div>
            );
            lastRenderedPx = leftPx;
        }

        if (isDayLevel) current.setDate(current.getDate() + 7);
        else if (isMonthLevel) current.setMonth(current.getMonth() + 1);
        else current.setFullYear(current.getFullYear() + 1);
    }

    return (
        <div
            className="bottom"
            style={{
                width: `${totalWidth}px`,
                height: "44px",
            }}
        >
            {ticks}
        </div>
    );
};

export default TimelineAxe;
