export const monthsNames = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const dayToMs = 86400000;
export const yearToDays = 365;

export const toMs = (value) => {
    if(value === null) return null;
    const ms = new Date(value).getTime();
    return Number.isNaN(ms) ? null : ms;
}

export const clamp = (value, min, max)=> {
    if (min > max){
        // min = max + min;
        // max = min - max;
        // min = min - max;

        [min, max] = [max, min];
    }
    if (Number.isNaN(value)) return min;
    return Math.min(max, Math.max(min, value));
}


export const formatEventDate = (startDate, endDate, { withYear = false } = {}) => {
    if (!startDate) return "";

    const year = startDate.getFullYear();
    const startStr = `${startDate.getDate()} ${monthsNames[startDate.getMonth()]}`;

    if (!endDate || startDate.getTime() === endDate.getTime()) {
        return withYear ? `${startStr} ${year}` : startStr;
    }

    const sameYear = startDate.getFullYear() === endDate.getFullYear();
    const endStr = `${endDate.getDate()} ${monthsNames[endDate.getMonth()]}`;
    const range = `${startStr} — ${endStr}`;

    if (withYear || !sameYear) {
        return `${range} ${endDate.getFullYear()}`;
    }

    return range;
};