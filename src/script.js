/*
    script.js
    - update HTML
*/

/*
    updateBusInfo: bus, {station, formatted time} -> void
    - update BusInfo
*/
var updateBusInfo = (bus, info) => {
    $("#current .button").removeClass("red");
    $("#current .button").removeClass("green");
    $("#current .button").removeClass("blue");
    $("#current .button").addClass(bus.toLowerCase());

    $("#current .button").html(`<i class="bus icon"></i> ${info.station}`);
    $("#next-bus").text(`Next ${info.time}`);
};

/*
    updateArrivingInfo: bus, list of {station, formatted time} -> void
    - update table
*/
var updateArrivingInfo = (bus, infos) => {
    $("table").removeClass("red");
    $("table").removeClass("green");
    $("table").removeClass("blue");
    $("table").addClass(bus.toLowerCase());

    $("tbody").empty();
    infos.forEach((info) => {
        $("tbody").append(`<tr><td data-label="Station">${info.station}</td><td data-label="Arriving">${info.time}</td></tr>`);
    });
};

/*
    updateRemainingTime: void -> void
    - update remaining time
    - using window.nextBusTime as global
*/
var updateRemainingTime = function () {
    var now = new Date();
    var hours = window.nextBusTime.hours - now.getHours();
    var minutes = window.nextBusTime.minutes - now.getMinutes() - 1;
    var seconds = 60 - now.getSeconds();
    if (minutes < 0) {
        hours -= 1;
        minutes += 60;
    }

    var stime = formatTime({ hours: minutes, minutes: seconds });
    if (hours > 0) {
        stime = String(hours) + ":" + stime;
        if (hours < 10) stime = "0" + stime;
    }

    $("#remaining-time").text(`Remaining ${stime}`);
};

/*
    constructSidebar: bus -> void
    - construct sidebar with given bus
*/
var constructSidebar = (bus) => {
    $(".ui.sidebar").empty();
    database[bus.toLowerCase()].stations.forEach((station) => {
        $(".ui.sidebar").append(`<a class="item">${station}</a>`);
    });
};

/*
    showSidebar: bus -> void
    - show sidebar
*/
var showSidebar = () => {
    $(".ui.sidebar").sidebar("setting", "transition", "overlay").sidebar("show");
};

/*
    hideSidebar: bus -> void
    - hide sidebar
*/
var hideSidebar = () => {
    $(".ui.sidebar").sidebar("setting", "transition", "overlay").sidebar("hide");
};

//---------- Settings ----------//
$(document).ready(function () {
    var infos = depart("red", 26, false);
    window.nextBusTime = deformatTime(infos[0].time);

    updateBusInfo("red", infos[0]);
    updateArrivingInfo("red", infos);

    updateRemainingTime();
    setInterval(updateRemainingTime, 1000);
});

//---------- Bus Selection ----------//
$(".menu a").click(function () {
    var bus = $(this).text();

    constructSidebar(bus);

    var that = this;

    /* Add station selection listener */
    $(".sidebar .item").click(function () {
        hideSidebar();

        $(".menu a").removeClass("active");
        $(that).addClass("active");

        var infos = depart(bus, $(this).index(), false);
        window.nextBusTime = deformatTime(infos[0].time);

        updateBusInfo(bus, infos[0]);
        updateArrivingInfo(bus, infos);

        updateRemainingTime();
    });

    showSidebar();
});

//---------- Station Selection ----------//
$("#current .button").click(function () {
    var bus = $(".menu a.active").text().toLowerCase();

    constructSidebar(bus);

    /* Add station selection listener */
    $(".sidebar .item").click(function () {
        hideSidebar();

        var infos = depart(bus, $(this).index(), false);
        window.nextBusTime = deformatTime(infos[0].time);

        updateBusInfo(bus, infos[0]);
        updateArrivingInfo(bus, infos);

        updateRemainingTime();
    });

    showSidebar();
});
