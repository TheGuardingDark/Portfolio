
var greenMod = document.getElementById("greenMod");
var purpleMod = document.getElementById("purpleMod");
var blueMod = document.getElementById("blueMod");
var span = document.getElementsByClassName("close")[0];



function openCodeMod() {
    greenMod.style.display = "block";
    purpleMod.style.display = "none";
    blueMod.style.display = "none";
    closeNav();
}

function openAboutMod() {
    purpleMod.style.display = "block";
    greenMod.style.display = "none";
    blueMod.style.display = "none";
    closeNav();
}

function openContactMod() {
    blueMod.style.display = "block";
    greenMod.style.display = "none";
    purpleMod.style.display = "none";
    closeNav();

}

function closeMod() {
    greenMod.style.display = "none";
    purpleMod.style.display = "none";
    blueMod.style.display = "none";
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

