
var span = document.getElementsByClassName("close")[0];
var sidenav = document.getElementById("mySideNav");
var btn = document.getElementById("btns");

$(".coding").hide();
$(".about").hide();
$(".contact").hide();
$(".linkedIn").hide();

$(".sphereGreen").hover(function() {
    $(".coding").show();
}, function() {
    $(".coding").hide();
});

$(".spherePurple").hover(function() {
    $(".about").show();
}, function() {
    $(".about").hide();
});

$(".sphereBlue").hover(function() {
    $(".contact").show();
}, function() {
    $(".contact").hide();
});

$(".burgImg").hover(function() {
    $(".linkedIn").show();
}, function() {
    $(".linkedIn").hide();
});

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

