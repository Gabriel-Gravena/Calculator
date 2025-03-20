let display = document.getElementById("display");
let resultDisplay = false;
let operator = "";
let firstNumber = "";
let secondNumber = "";

function addNumber(num) {
    if(resultDisplay){
        clearDisplay();
    }

    if(display.textContent.length > 19){
        return;
    }

    if (operator === "") {
        firstNumber += num;
        display.textContent += num;
    } else {
        secondNumber += num;
        display.textContent += num;
    }
}

function addOperator(op) {
    if(resultDisplay && firstNumber !== ""){ 
        display.textContent = firstNumber + op;
        operator = op;
        resultDisplay = false;
    }else if (firstNumber !== "" && operator === "") {
        operator = op;
        display.textContent += op;
    }else if(firstNumber !== "" && secondNumber === ""){
        display.textContent = display.textContent.slice(0, -1) + op;
        operator = op;
    }
}

function clearDisplay() {
    operator = "";
    firstNumber = "";
    secondNumber = "";
    display.textContent = "";
    resultDisplay = false;
}


function calculate() {
    if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
        let result;
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        switch (operator) {
            case "+":
                result = sum(num1, num2);
                break;
            case "-":
                result = minus(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                if (num2 === 0) {
                    display.textContent = "Erro!";
                    resultDisplay = true;
                    return;
                }else{
                    result = divide(num1,num2);
                }
                break;
            case "%":
                if (num2 === 0) {
                    display.textContent = "Erro!";
                    resultDisplay = true;
                    return;
                }else{
                    result = num1 % num2;
                }
                break;
        }
        display.textContent += "=" + parseFloat(result.toFixed(2));
        operator = "";
        firstNumber = parseFloat(result.toFixed(2));
        secondNumber = "";
        resultDisplay = true;
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}