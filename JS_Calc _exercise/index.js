const num1 = parseFloat(prompt("Enter First Numberr"));
const num2 = parseFloat(prompt("Enter second Numberr"));
const operator = prompt("Select Operation Chioce : '+' '-' '*' '/' " );


let result;
  
// this if statement checkmate the operation
if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;   
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '/') {
    result = num1 / num2;
} else{
    prompt("invalid operation !!! Check the entry and Try again!")
}

alert (result);
