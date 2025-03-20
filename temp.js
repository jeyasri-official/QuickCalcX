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
}

// Allow pressing "Enter" to trigger conversion
document.getElementById("tempInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});
