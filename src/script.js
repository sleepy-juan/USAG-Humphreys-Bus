var currentNextBusOnUI = 0;

$(document).ready(function () {
    var now = new Date();
    var hr = now.getHours();
    var mn = now.getMinutes();
    var nextBus = getNextBus("red", 26, hr * 100 + mn, now.getDay(), false);
    currentNextBusOnUI = nextBus[1];

    if (currentNextBusOnUI < 1000) {
        $("#next-bus").text(
            `Next 0${parseInt(currentNextBusOnUI / 100)}:${
                currentNextBusOnUI % 100
            }`
        );
    } else {
        $("#next-bus").text(
            `Next ${parseInt(currentNextBusOnUI / 100)}:${
                currentNextBusOnUI % 100
            }`
        );
    }

    $("tbody").empty();
    for (var i = 0; i < nextBus.length; i += 2) {
        $("tbody").append(
            `<tr><td data-label="Station">${
                nextBus[i]
            }</td><td data-label="Arriving">${nextBus[i + 1]}</td></tr>`
        );
    }

    updateRemainingTime();
});

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

        var stationIdx = $(this).index();
        var now = new Date();
        var hr = now.getHours();
        var mn = now.getMinutes();
        var nextBus = getNextBus(
            currentBus,
            stationIdx,
            hr * 100 + mn,
            now.getDay(),
            false
        );
        currentNextBusOnUI = nextBus[1];

        if (currentNextBusOnUI < 1000) {
            $("#next-bus").text(
                `Next 0${parseInt(currentNextBusOnUI / 100)}:${
                    currentNextBusOnUI % 100
                }`
            );
        } else {
            $("#next-bus").text(
                `Next ${parseInt(currentNextBusOnUI / 100)}:${
                    currentNextBusOnUI % 100
                }`
            );
        }

        $("tbody").empty();
        for (var i = 0; i < nextBus.length; i += 2) {
            $("tbody").append(
                `<tr><td data-label="Station">${
                    nextBus[i]
                }</td><td data-label="Arriving">${nextBus[i + 1]}</td></tr>`
            );
        }

        updateRemainingTime();
    });

    $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
});

var updateRemainingTime = function () {
    var now = new Date();
    var hr = now.getHours();
    var mn = now.getMinutes();
    var sn = now.getSeconds();

    var leftmn = (currentNextBusOnUI % 100) - mn - 1;
    if (parseInt(currentNextBusOnUI / 100) > hr) {
        leftmn += 60;
    }
    var leftsn = 60 - sn;

    var smn = String(leftmn);
    if (leftmn < 10) {
        smn = "0" + smn;
    }
    var ssn = String(leftsn);
    if (leftsn < 10) {
        ssn = "0" + ssn;
    }

    $("#remaining-time").text(`Remaining ${smn}:${ssn}`);
};

/* Timer */
setInterval(updateRemainingTime, 1000);
