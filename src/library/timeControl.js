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

export const toMs = (value) => {
    if(value === null) return null;
    const ms = new Date(value).getTime();
    return Number.isNaN(ms) ? null : ms;
}

export const clamp = (value, min, max)=> {
    if (min > max){
        min = max + min;
        max = min - max;
        min = min - max;
    }
    if (Number.isNaN(value)) return min;
    return Math.min(max, Math.max(min, value));
}