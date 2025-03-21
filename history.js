function loadHistory() {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    console.log("Loaded History:", history); 

    if (history.length === 0) {
        historyList.innerHTML = "<li class='list-group-item text-center'>No history found.</li>";
        return;
    }

    history.forEach(entry => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.style.marginBottom = "10px";
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    localStorage.removeItem("calcHistory");
    loadHistory();
}

// Load history when the page opens
loadHistory();
