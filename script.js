/* Bus Selection */
$(".menu a").click(function () {
    $(".menu a").removeClass("active");
    $(this).addClass("active");

    var currentBus = $(this).text();
    $(".ui.sidebar").empty();
    if (currentBus === "Red") {
        redStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    } else if (currentBus === "Green") {
        greenStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    } else {
        blueStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    }

    /* Add station selection listener */
    $(".sidebar .item").click(function () {
        $(".ui.sidebar").sidebar("hide");

        $("#current .button").removeClass("red");
        $("#current .button").removeClass("green");
        $("#current .button").removeClass("blue");
        $("#current .button").addClass(currentBus.toLowerCase());

        $("table").removeClass("red");
        $("table").removeClass("green");
        $("table").removeClass("blue");
        $("table").addClass(currentBus.toLowerCase());

        $("#current .button").html(
            `<i class="bus icon"></i> ${$(this).text()}`
        );
    });

    $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
});
