import getProgression from '../utils/getProgression.js';

const progression = () => {
  const { answer, arr } = getProgression();
  const question = `Question: ${arr.join(' ')}\n`;
  return { question, answer };
};
export default progression;
