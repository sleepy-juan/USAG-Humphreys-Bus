$(".menu a").click(function () {
    $(".menu a").removeClass("active");
    $(this).addClass("active");

    $("#red-station").css("display", "none");
    $("#green-station").css("display", "none");
    $("#blue-station").css("display", "none");

    if ($(this).text() === "Red") {
        $("#red-station").css("display", "block");
    } else if ($(this).text() === "Green") {
        $("#green-station").css("display", "block");
    } else {
        $("#blue-station").css("display", "block");
    }
});

$("#red-station button").click(function () {
    $("#red-station button").addClass("basic");
    $(this).removeClass("basic");
});

$("#green-station button").click(function () {
    $("#green-station button").addClass("basic");
    $(this).removeClass("basic");
});

$("#blue-station button").click(function () {
    $("#blue-station button").addClass("basic");
    $(this).removeClass("basic");
});
