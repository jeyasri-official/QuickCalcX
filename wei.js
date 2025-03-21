function convertWeight() {
    let weightInput = document.getElementById("weightInput").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    // if input is empty or not a number
    if (weightInput === "" || isNaN(weightInput)) {
        resultElement.innerHTML = "Please enter a valid Number!";
        resultElement.style.color = "red";
        return;
    }

    weightInput = parseFloat(weightInput); // Converting input to number

    // Conversion factors (all conversions to kg first)
    let conversionFactors = {
        "kg": 1,
        "lbs": 0.453592, // 1 lb = 0.453592 kg
        "g": 0.001, // 1 g = 0.001 kg
        "oz": 0.0283495, // 1 oz = 0.0283495 kg
        "st": 6.35029, // 1 st = 6.35029 kg
        "t": 1000 // 1 tonne = 1000 kg
    };

    // Convert input weight to kg
    let weightInKg = weightInput * conversionFactors[fromUnit];

    // Convert from kg to target unit
    let convertedWeight = weightInKg / conversionFactors[toUnit];

    resultElement.innerHTML = `Result : ${convertedWeight.toFixed(2)} ${toUnit}`;

    let userWeightInput = `${weightInput} ${fromUnit}`
    let calculation = `${convertedWeight.toFixed(2)} ${toUnit}`
    saveToHistory(userWeightInput,calculation);
    
}

document.getElementById("weightInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertWeight();
    }
});


function saveToHistory(calculation, result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let entry = `${calculation} = ${result}`;

    history.unshift(entry); // Add latest entry at the beginning
    if (history.length > 20) history.pop(); // Keep only last 20 entries

    localStorage.setItem("calcHistory", JSON.stringify(history));
}