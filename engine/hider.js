function setDisplay() {
    var x = document.getElementById("hidden");
    if (x.style.display === "table") {
        x.style.display = "none";
    } else {
        x.style.display = "table";
    }
}