// Проверяет, что dev-сервер Vite отдаёт актуальную разметку QuizQuestion
// (ярлык должен быть заголовком h2, а не span).
const url = "http://[::1]:5173/src/component/TestContent/tasks/Quiz/QuizQuestion.jsx";

const res = await fetch(url);
const text = await res.text();

console.log("status:", res.status);
console.log("label rendered as h2:", text.includes('"h2"'));
console.log("options use quiz__option:", text.includes("quiz__option"));
console.log("old per-option quiz__answer class:", /className: `quiz__answer\$\{/.test(text));
console.log("first 200 chars:", text.slice(0, 200).replace(/\n/g, " "));
