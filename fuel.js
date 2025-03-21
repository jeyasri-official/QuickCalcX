function calculateFuelCost() {
    let distance = parseFloat(document.getElementById("distance").value);
    let efficiency = parseFloat(document.getElementById("efficiency").value);
    let fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    let resultElement = document.getElementById("result");

    if (isNaN(distance) || isNaN(efficiency) || isNaN(fuelPrice) || distance <= 0 || efficiency <= 0 || fuelPrice < 0) {
        resultElement.innerHTML = "Invalid input!";
        resultElement.style.color = "red";
        return;
    }

    let fuelNeeded = distance / efficiency;
    let totalCost = fuelNeeded * fuelPrice;

    resultElement.innerHTML = `Total Cost: ${totalCost.toFixed(2)}`;

    let calculation = `Distance: ${distance} km, Efficiency: ${efficiency} km/l, Fuel Price: $${fuelPrice.toFixed(2)}`  
    let totalAmount = `Total Cost: $${totalCost.toFixed(2)}`

    saveToHistory(calculation, totalAmount);
    
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateFuelCost();
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