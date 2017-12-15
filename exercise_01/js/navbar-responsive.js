function myFunction() {
    var x = document.getElementById("my-mm");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}