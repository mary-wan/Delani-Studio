$(document).ready(function () {
    $(".design").click(function () {
        $(".description1").slideToggle();
        $("#desgn").slideToggle();
    });
    $(".development").click(function () {
        $(".description2").slideToggle();
        $("#develop").slideToggle();
    });
    $(".prdManagement").click(function () {
        $(".description3").slideToggle();
        $("#productMngt").slideToggle();
    });
    $(".work1").mouseover(function () {
        $("#work1Desc").show();
    });
    $(".work1").mouseout(function () {
        $("#work1Desc").hide();
    });
    $(".work2").mouseover(function () {
        $("#work2Desc").show();
    });
    $(".work2").mouseout(function () {
        $("#work2Desc").hide();
    });
    $(".work3").mouseover(function () {
        $("#work3Desc").show();
    });
    $(".work3").mouseout(function () {
        $("#work3Desc").hide();
    });
    $(".work4").mouseover(function () {
        $("#work4Desc").show();
    });
    $(".work4").mouseout(function () {
        $("#work4Desc").hide();
    });
    $(".work5").mouseover(function () {
        $("#work5Desc").show();
    });
    $(".work5").mouseout(function () {
        $("#work5Desc").hide();
    });
    $(".work6").mouseover(function () {
        $("#work6Desc").show();
    });
    $(".work6").mouseout(function () {
        $("#work6Desc").hide();
    });
    $(".work7").mouseover(function () {
        $("#work7Desc").show();
    });
    $(".work7").mouseout(function () {
        $("#work7Desc").hide();
    });
    $(".work8").mouseover(function () {
        $("#work8Desc").show();
    });
    $(".work8").mouseout(function () {
        $("#work8Desc").hide();
    });

    $("#formFeedback").submit(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#feedback").val();

        alert(name + " we have received your message. Thank you for reaching out to us. ");
        resetFields()
    });

    function resetFields() {
        $("input#name").val("");
        $("input#email").val("");
        
    };

});