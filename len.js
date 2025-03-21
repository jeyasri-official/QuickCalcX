function convertLength() {
    let input = parseFloat(document.getElementById("lengthInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(input)) {
        let resultElement = document.getElementById("result");
        resultElement.innerText = "Please enter a valid Number";
        resultElement.style.color = "red"; 
        return;
    }

    // Conversion factors (relative to meters)
    const conversionRates = {
        meter: 1,
        kilometer: 0.001,
        mile: 0.000621371,
        foot: 3.28084,
        inch: 39.3701,
        centimeter: 100,
        yard: 1.09361
    };

    // Convert input to meters first
    let inputInMeters = input / conversionRates[fromUnit];

    // Convert meters to the target unit
    let result = inputInMeters * conversionRates[toUnit];

    document.getElementById("result").innerText = ` ${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;

    let userLenInput = `${input} ${fromUnit}`
    let calculation =  `${result.toFixed(2)} ${toUnit}`;
    saveToHistory(userLenInput, calculation);
}

function saveToHistory(calculation, result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let entry = `${calculation} = ${result}`;

    history.unshift(entry); // Add latest entry at the beginning
    if (history.length > 20) history.pop(); // Keep only last 20 entries

    localStorage.setItem("calcHistory", JSON.stringify(history));
}

localStorage.setItem("lastOpenedFile", window.location.pathname);

