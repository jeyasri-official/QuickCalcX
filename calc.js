let input = document.querySelector("input");

// Function to handle button clicks
function addValue(userInput) {
    if (userInput === "%") {
        input.value += "%"; // Just add '%' without changing the number
    } else {
        input.value += userInput;
    }
}

// Function to clear the input field
function clearVal() {
    input.value = "";
}

// Function to delete the last character
function delValue() {
    input.value = input.value.slice(0, -1);
}

// Function to evaluate the expression
function total() {
    try {
        // Convert percentages: replace "50%" with "0.5"
        let expression = input.value.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
            return parseFloat(num) / 100;
        });

        input.value = eval(expression); // Evaluate the expression

    } catch {
        input.style.color = "red"; 
        input.style.fontSize = "25px";
        input.value = "Oops! Enter Correct Syntax!";

        setTimeout(() => {
            input.style.color = ""; 
            input.style.fontSize = ""; 
            input.value = ""; 
        }, 1500);
    }
}
