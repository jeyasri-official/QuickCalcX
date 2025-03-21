let input = document.querySelector("input");
let resultDisplayed = false; // Track if the result is displayed
function addValue(userInput) {
    let lastChar = input.value.slice(-1);

    // If a result is displayed and the user enters a number, reset input
    if (resultDisplayed && !isNaN(userInput)) {
        input.value = userInput;
        resultDisplayed = false;
    } 
    // If a result is displayed and the user enters an operator, continue calculation
    else if (resultDisplayed && isOperator(userInput)) {
        input.value += userInput;
        resultDisplayed = false;
    } 
    else {
        // If the last character is %, and user enters a number, add '*'
        if (lastChar === "%" && !isNaN(userInput)) {
            input.value += "*" + userInput;
        } else {
            input.value += userInput;
        }
    }
}

// Check if the input is an operator
function isOperator(char) {
    return ["+", "-", "*", "/", "%"].includes(char);
}

function clearVal() {
    input.value = "";
    resultDisplayed = false;
}
function delValue() {
    input.value = input.value.slice(0, -1);
}
function total() {
    try {
        let expression = input.value.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
            return "(" + (parseFloat(num) / 100) + ")";
        });

        let result = eval(expression); 
        let calculation = `Expression: ${input.value}`; 
        
        input.value = result;
        resultDisplayed = true; 

        saveToHistory(calculation, result);

    } catch {
        input.style.color = "red";
        input.style.fontSize = "25px";
        input.value = "Oops! Enter Correct Syntax!";
        
        setTimeout(() => {
            input.style.color = "";
            input.style.fontSize = "";
            input.value = "";
        }, 1500);
        resultDisplayed = false;
    }
}

function saveToHistory(calculation, result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let entry = `${calculation} = ${result}`;

    history.unshift(entry); // Add latest entry at the beginning
    if (history.length > 20) history.pop(); // Keep only last 20 entries

    localStorage.setItem("calcHistory", JSON.stringify(history));
}