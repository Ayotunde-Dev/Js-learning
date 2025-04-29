// Function to calculate arithmetic operations with 2 numbers
function simpleCalculator(num1, num2, operator) {
    if (typeof num1 !== 'number') {
      return false
    }
    if (typeof num2 !== 'number') {
      return false
    }
    if (operator == '+') {
      return num1 + num2;
    } else if (operator == '-') {
      return num1 - num2;
    } else if (operator == '*') {
      return num1 * num2;
    } else if (operator == '/') {
      return num1 / num2; 
    } else if (operator == '%') {
        return num1 % num2  ;
    } else {
      return "Invalid";
    }
    
  }
  console.log(simpleCalculator(8, 2, '+'));
  console.log(simpleCalculator(5, 2, '-')); 
  console.log(simpleCalculator(11, 2, '%'));
  console.log(simpleCalculator(4, 1, '/'));
  console.log(simpleCalculator(2, 2, '*'));
  console.log(simpleCalculator(4, false, '+'));
  console.log(simpleCalculator('dd', 2, '/'));
  console.log(simpleCalculator(false, false, '*'));
  