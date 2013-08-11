/*
Saves the value of the text input
*/
function saveOptions() {
    localStorage["redirectingTo"] = document.getElementById("input").value;
    window.close();
}

/*
Sets the value of the text input
*/
function restoreOptions() {
    var redirectTo = localStorage["redirectingTo"];
    if (!redirectTo) {
        return;
    }
    document.getElementById("input").value = redirectTo;
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("input").addEventListener("change", saveOptions);
