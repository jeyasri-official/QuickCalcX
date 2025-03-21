function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    if (tempInput === "" || isNaN(tempInput)) {
        resultElement.innerHTML = "Please enter a valid Number!";
        resultElement.style.color = "red";
        return;
    }

    tempInput = parseFloat(tempInput); 
    let convertedTemp;

    // Conversion logic
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemp = (tempInput * 9/5) + 32; // °C to °F
        } else if (toUnit === "kelvin") {
            convertedTemp = tempInput + 273.15; // °C to K
        } else {
            convertedTemp = tempInput; // Same unit
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemp = (tempInput - 32) * 5/9; // °F to °C
        } else if (toUnit === "kelvin") {
            convertedTemp = (tempInput - 32) * 5/9 + 273.15; // °F to K
        } else {
            convertedTemp = tempInput; // Same unit
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemp = tempInput - 273.15; // K to °C
        } else if (toUnit === "fahrenheit") {
            convertedTemp = (tempInput - 273.15) * 9/5 + 32; // K to °F
        } else {
            convertedTemp = tempInput; // Same unit
        }
    }
    
    resultElement.innerHTML = `Result: ${convertedTemp.toFixed(2)} ${toUnit}`;

    let userTempInput = `${tempInput} ${fromUnit}`
    let calculation = `${convertedTemp.toFixed(2)} ${toUnit}`
    saveToHistory(userTempInput,calculation);
    
}

// Allow pressing "Enter" to trigger conversion
document.getElementById("tempInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});


function saveToHistory(calculation, result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let entry = `${calculation} = ${result}`;

    history.unshift(entry); // Add latest entry at the beginning
    if (history.length > 20) history.pop(); // Keep only last 20 entries

    localStorage.setItem("calcHistory", JSON.stringify(history));
}

localStorage.setItem("lastOpenedFile", window.location.pathname);