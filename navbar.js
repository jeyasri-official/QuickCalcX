function openMenu() {
    document.getElementById("fullscreenMenu").classList.add("show");
    document.querySelector(".nav-links").style.display = "none"; // Hide desktop menu
}

function closeMenu() {
    document.getElementById("fullscreenMenu").classList.remove("show");
    document.querySelector(".nav-links").style.display = "flex"; // Show desktop menu
}

// Function to toggle mobile dropdowns
function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
}

fetch("./navbar.html")  
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
