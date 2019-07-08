
var span = document.getElementsByClassName("close")[0];
var sidenav = document.getElementById("mySideNav");
var btn = document.getElementById("btns");


function openCodeMod() {
    $("#greenMod").removeClass("slideOut").addClass("slideIn");
    $("#blueMod").removeClass("slideIn").addClass("slideOut");
    $("#purpleMod").removeClass("slideIn").addClass("slideOut");
    $(".close").addClass("visible");
    closeNav();
}

function openAboutMod() {
    $("#purpleMod").removeClass("slideOut").addClass("slideIn");
    $("#blueMod").removeClass("slideIn").addClass("slideOut");
    $("#greenMod").removeClass("slideIn").addClass("slideOut");
    closeNav();
}

function openContactMod() {
   $("#blueMod").addClass("slideIn").removeClass("slideOut");
   $("#purpleMod").removeClass("slideIn").addClass("slideOut");
   $("#greenMod").removeClass("slideIn").addClass("slideOut");
   closeNav();

}

function closeMod() {
    $("#blueMod").removeClass("slideIn").addClass("slideOut");
    $("#purpleMod").removeClass("slideIn").addClass("slideOut");
    $("#greenMod").removeClass("slideIn").addClass("slideOut");
    closeNav();
}



function openNav() {
    sidenav.style.width = "250px";
    btn.style.opacity = "1";
    btn.style.transition = "4.5s"

}

function closeNav() {
    sidenav.style.width = 0;
    btn.style.opacity = "0";
    btn.style.transition = "0.1s"  
}

