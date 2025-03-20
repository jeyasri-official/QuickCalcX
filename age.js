function calculateAge() {
    let dobInput = document.getElementById("dobInput").value;
    let resultElement = document.getElementById("result");

    if (dobInput === "") {
        resultElement.innerHTML = "Please select a valid date!";
        resultElement.style.color = "red";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    if (dob > today) {
        resultElement.innerHTML = "Invalid! Future date not allowed";
        resultElement.style.color = "red";
        resultElement.style.fontSize = "22px"
        return;
    }

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultElement.innerHTML = `${ageYears} Years, ${ageMonths} Months, ${ageDays} Days`;
}

document.getElementById("dobInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});
