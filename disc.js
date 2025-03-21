function calculateDiscount() {
    let price = parseFloat(document.getElementById("originalPrice").value);
    let discount = parseFloat(document.getElementById("discountPercent").value);
    let resultElement = document.getElementById("result");

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
        resultElement.innerHTML = "Invalid input!";
        resultElement.style.color = "red";
        return;
    }

    let discountAmount = (price * discount) / 100;
    
    let finalPrice = price - discountAmount;

    resultElement.innerHTML = `Final Price : ${finalPrice.toFixed(2)}`;

    let calculation = `Amount : $${price}, Discount: ${discount}%`
    saveToHistory(calculation,resultElement.innerHTML);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateDiscount();
    }
});


function saveToHistory(calculation, result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let entry = `${calculation} = ${result}`;

    history.unshift(entry); // Add latest entry at the beginning
    if (history.length > 20) history.pop(); // Keep only last 20 entries

    localStorage.setItem("calcHistory", JSON.stringify(history));
}