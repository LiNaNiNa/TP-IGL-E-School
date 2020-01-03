
    
$(document).ready(function () {   
    $(".login").hide();       
    $(".login").addClass("animated");
   
   
    
    $("#btnlog").click(function () {
        $(".login").removeClass("bounceOutLeft");
        $("#bodyHome").addClass("opacitybody");
        $(".login").addClass("bounceInRight");
        $(".login").fadeIn("slow");
    });
    $("#btnlogin").click(function () {
        $(".login").removeClass("bounceOutLeft");
        $("#bodyHome").addClass("opacitybody");
        $(".login").addClass("bounceInRight");
        $(".login").fadeIn("slow");
    });
    $(".closemg").click(function () {
        $("#bodyHome").removeClass("bounceInRight");
        $(".login").addClass("bounceOutLeft");
        $("#bodyHome").removeClass("opacitybody");
        $(".login").fadeOut("slow");


    });
});