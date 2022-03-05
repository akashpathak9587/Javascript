var myPopup = document.querySelector("#myPopup");
var modelbtn = document.querySelector("#modelbtn");
var close = document.querySelector(".close");
modelbtn.onclick = function () {
    myPopup.style.display = "block";
}

close.onclick = function () {
    myPopup.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == myPopup) {
        myPopup.style.display = "none";
    }
}