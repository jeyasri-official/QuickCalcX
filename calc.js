let input = document.querySelector("input");

// Function to calculate the result
function total() {
    try {
        input.value = eval(input.value);
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

    function addValue(userInput) {
        input.value += userInput;
    }

    function clearVal() {
        input.value = "";
    }

    function delValue() {
        input.value = input.value.slice(0, -1);
    }
