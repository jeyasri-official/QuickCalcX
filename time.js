function convertTime() {
    let timeInput = document.getElementById("timeInput").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    if (timeInput === "" || isNaN(timeInput)) {
        resultElement.innerHTML = "Please enter a valid Number!";
        resultElement.style.color = "red";
        return;
    }

    timeInput = parseFloat(timeInput); 

    // Conversion factors to seconds
    const conversionFactors = {
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: 86400,
        weeks: 604800
    };

    // Convert input time to seconds first
    let timeInSeconds = timeInput * conversionFactors[fromUnit];

    // Convert from seconds to the desired unit
    let convertedTime = timeInSeconds / conversionFactors[toUnit];

    resultElement.innerHTML = `Result : ${convertedTime.toFixed(2)} ${toUnit}`;
}

document.getElementById("timeInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTime();
    }
});
