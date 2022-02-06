$(document).ready(function () {
    $("p, h1, h2").click(function () {
        /* this is any p */
        $(this).hide();
    })
    $("#id1").mouseenter(function () {
        alert("You entered")
    })

    $("button").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#div4").fadeOut(3000);
        $("#div5").fadeToggle();
    })
})