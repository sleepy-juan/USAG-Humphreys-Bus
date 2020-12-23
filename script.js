/* BUS SELECTION */
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
    $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
});
