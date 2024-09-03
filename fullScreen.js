let clickFull = document.getElementById("fullScreen");
clickFull.onclick = openFullscreen;
var elem = document.documentElement;
function openFullscreen() {
    elem.requestFullscreen();
document.getElementById("fullScreen").innerHTML = "Back";
clickFull.onclick = closeFullscreen;
goStart.onclick = closeFullscreen;
}

function closeFullscreen() {
    document.exitFullscreen();
document.getElementById("fullScreen").innerHTML = "Fullscreen";
clickFull.onclick = openFullscreen;
}