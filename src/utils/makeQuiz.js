const ROUND_COUNT = 3;

const makeQuiz = (game) => Array(ROUND_COUNT).fill(null).map(() => game());
export default makeQuiz;
