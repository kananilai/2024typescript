function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const resutl = n1 + n2;
  if (showResult) {
    console.log(phrase + resutl);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result: ";

add(number1, number2, printResult, resultPhrase);
