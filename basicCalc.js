// Function to calculate arithmetic operations with 2 numbers
function simpleCalculator(num1, num2, operator) {
    if (operator == '+') {
      return num1 + num2;
    } else if (operator == '-') {
      return num1 - num2;
    } else if (operator == '*') {
      return num1 * num2;
    } else if (operator == '/') {
      return num1 / num2; 
    } else if (operator == '%') {
        return num1 % num2;
    } else {
      return "Invalid";
    }
  }

  console.log(simpleCalculator(4, 2, '*')); 
  console.log(simpleCalculator(4, 2, '%'));
  console.log(simpleCalculator(4, 2, '-'));
  console.log(simpleCalculator(4, 2, '+'));
  console.log(simpleCalculator(4, 2, '/'));
  