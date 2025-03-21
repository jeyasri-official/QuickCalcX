function calculateBMI() {
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value;
    let resultElement = document.getElementById("result");
    let categoryElement = document.getElementById("category");

    if (weight === "" || height === "" || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.innerHTML = "Please enter valid Numbers!";
        resultElement.style.color = "red";
        categoryElement.innerHTML = "";
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height) / 100; // Convert cm to meters

    // Calculate BMI
    let bmi = weight / (height * height);
    resultElement.innerHTML = `Your BMI : ${bmi.toFixed(2)}`;

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight 😟";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight 😊";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight 😐";
    } else {
        category = "Obese 😟";
    }

    categoryElement.innerHTML = `Category : ${category}`
    categoryElement.style.color = "#030113";

    let calculation = `Weight: ${weight}kg, Height: ${height * 100}cm`;
    saveToHistory(calculation, `BMI: ${bmi.toFixed(2)}, ${category}`);
}

document.getElementById("heightInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateBMI();
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