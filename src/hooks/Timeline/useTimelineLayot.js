import { dayToMs, yearToDays } from "../../library/timeControl";

const useTimelineLayot = (props) => {
    const {
        eventsData,
        pxPerMs,
        paddingX = 130,
        containerHeight,
    } = props;

    if (!Array.isArray(eventsData) || eventsData.length === 0) {
        return {
            positionedEvents: [],
            totalWidth: 0,
            minTime: 0,
            maxTime: 0,
            rowStep: 0,
            paddingX: 0,
            pillHeight: 32,
        };
    }

    const sorted = eventsData
        .map((item) => {
            let startMs = item.tagTimeStart.getTime();
            let endMs = item.tagTimeEnd ? item.tagTimeEnd.getTime() : startMs;

            if (endMs < startMs) {
                [startMs, endMs] = [endMs, startMs];
            }

            return {
                ...item,
                startMs,
                endMs: Math.max(endMs, startMs + dayToMs),
            };
        })
        .sort((a, b) => a.startMs - b.startMs);

    const minTime = sorted[0].startMs;
    const maxTime = Math.max(...sorted.map((event) => event.endMs));
    const totalDurationMs = Math.max(maxTime - minTime, dayToMs * yearToDays);
    const totalWidth = Math.max(totalDurationMs * pxPerMs + paddingX * 2, 1000);

    const rows = [];

    const positionedEvents = sorted.map((item) => {
        const leftPx = (item.startMs - minTime) * pxPerMs + paddingX;
        const rightPx = (item.endMs - minTime) * pxPerMs + paddingX;
        const widthPx = Math.max(rightPx - leftPx, 140);

        let rowIndex = 0;
        while (true) {
            if (!rows[rowIndex] || leftPx >= rows[rowIndex]) {
                rows[rowIndex] = leftPx + widthPx + 12;
                break;
            }
            rowIndex++;
        }

        return { ...item, leftPx, widthPx, rowIndex };
    });

    const maxRowsCount = Math.max(rows.length, 1);
    let minRowGap = 8;

    const pillHeightStart = Math.floor(
        (containerHeight - maxRowsCount * minRowGap) / maxRowsCount
    );
    const basePillHeight = Math.max(Math.min(pillHeightStart, 56), 40);

    const requiredTotalHeight = maxRowsCount * (basePillHeight + minRowGap);
    if (requiredTotalHeight > containerHeight) {
        minRowGap = Math.max(
            Math.floor((containerHeight - maxRowsCount * basePillHeight) / maxRowsCount),
            4
        );
    }

    const pillHeight = basePillHeight;
    const rowStep = pillHeight + minRowGap;

    return {
        positionedEvents,
        totalWidth,
        minTime,
        maxTime,
        rowStep,
        paddingX,
        pillHeight,
    };
};

export default useTimelineLayot;
