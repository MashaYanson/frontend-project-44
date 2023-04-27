const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};
export default isPrime;
