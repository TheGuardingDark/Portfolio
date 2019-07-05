
var greenMod = document.getElementById("greenMod");
var span = document.getElementsByClassName("close")[0];


function openCodeMod() {
    greenMod.style.display = "block";
}

span.onclick = function() {
    greenMod.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == greenMod) {
        greenMod.style.display = "none";
    }
}




function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("btns").style.opacity = "1";
    document.getElementById("btns").style.transition = "4.5s"

}

function closeNav() {
    document.getElementById("mySideNav").style.width = 0;
    document.getElementById("btns").style.opacity = "0";
    document.getElementById("btns").style.transition = "0.1s"  
}

