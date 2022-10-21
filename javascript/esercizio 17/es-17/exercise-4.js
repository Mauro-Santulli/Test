function calculate() {
  let result = 0;

  return {
    add(numb) {
      result += numb
      return result
    },
    sub(numb) {
      result -= numb;
      return result
    },
    multiply(numb) {
      result *= numb;
      return result
    },
    divide(numb) {
      result /= numb;
      return result
    },
    printResult() {
      console.log(result);
    }
  }
}

const calculator = calculate();
calculator.add(2)
calculator.add(4)
calculator.multiply(3)
calculator.sub(1)
calculator.sub(3)
calculator.divide(2)
calculator.printResult(); // Il risultato sarà: 7
