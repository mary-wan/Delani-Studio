$(document).ready(function(){
    $(".design").click(function(){
        $(".description1").toggle();
        $("#desgn").toggle();
    });
    $(".development").click(function(){
        $(".description2").toggle();
        $("#develop").toggle();
    });
    $(".prd_management").click(function(){
        $(".description3").toggle();
        $("#prd-mngt").toggle();
    });
});