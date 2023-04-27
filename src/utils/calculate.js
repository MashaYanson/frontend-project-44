function calculate(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;
  }
  if (operation === '-') {
    return number1 - number2;
  }
  if (operation === '*') {
    return number1 * number2;
  }
  return 0;
}
export default calculate;
