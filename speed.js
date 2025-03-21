function convertSpeed() {
    let speedInput = document.getElementById("speedInput").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    if (speedInput === "" || isNaN(speedInput)) {
        resultElement.innerHTML = "Please enter a valid Number!";
        resultElement.style.color = "red";
        return;
    }

    speedInput = parseFloat(speedInput); 

    // Conversion factors (all converted to m/s first)
    let conversionFactors = {
        "ms": 1,          // 1 m/s = 1 m/s
        "kmh": 0.277778,  // 1 km/h = 0.277778 m/s
        "mph": 0.44704,   // 1 mph = 0.44704 m/s
        "knots": 0.514444, // 1 knot = 0.514444 m/s
        "fts": 0.3048     // 1 ft/s = 0.3048 m/s
    };

    // Convert input speed to m/s
    let speedInMs = speedInput * conversionFactors[fromUnit];

    // Convert from m/s to target unit
    let convertedSpeed = speedInMs / conversionFactors[toUnit];

    resultElement.innerHTML = `Result : ${convertedSpeed.toFixed(4)} ${toUnit}`;

    let userSpeedInput = `${speedInput} ${fromUnit}`
    let calculation = `${convertedSpeed.toFixed(4)} ${toUnit}`
    saveToHistory(userSpeedInput,calculation);
}

document.getElementById("speedInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertSpeed();
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