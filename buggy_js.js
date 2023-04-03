function add_numbers(a, b) {
  return a + b;
}

function multiply_numbers(a, b) {
  return a * b;
}

function divide_numbers(a, b) {
  return a / b;
}

function calculate(operation, num1, num2) {
  if (operation === "add") {
    result = add_numbers(num1, num2);
  } else if (operation === "subtract") {
    result = subtract_numbers(num1, num2);
  } else if (operation === "multiply") {
    result = multiply_numbers(num1, num2);
  } else if (operation === "divide") {
    result = divide_numbers(num1, num2);
  } else {
    console.log("Invalid operation");
    return;
  }

  console.log(res);
}

calculate("subtract", 420, 69);
