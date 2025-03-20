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
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateFuelCost();
    }
});