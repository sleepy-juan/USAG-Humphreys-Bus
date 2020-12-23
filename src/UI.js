/*
    UI.js
    - main handlers for updating UIs
*/

//-------------------- MENU --------------------//

/*
    UIUpdateMenuColor: color -> void
    - set given color's button as active, and inactive for every else
*/
var UIUpdateMenuColor = (color) => {
    $(".menu a").removeClass("active");
    $(`.menu a.${color.toLowerCase()}`).addClass("active");
};

/*
    UIConstructSidebar: color -> void
    - construct sidebar's HTML without showing the sidebar
*/

var UIConstructSidebar = (color) => {
    $(".ui.sidebar").empty();

    if (color.toLowerCase() === "red") {
        redStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    } else if (color.toLowerCase() === "green") {
        greenStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    } else {
        blueStations.forEach((station) => {
            $(".ui.sidebar").append(`<a class="item">${station}</a>`);
        });
    }
};

/*
    UIShowSidebar: void -> void
    - show sidebar
*/
var UIShowSidebar = () => {
    $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
};

/*
    UIHideSidebar: void -> void
    - hide sidebar
*/
var UIHideSidebar = () => {
    $(".ui.sidebar").sidebar("hide");
};

/*
    UISetSidebarItemClickListener: function -> void
    - set sidebar item's click listener with given function
*/
var UISetSidebarItemClickListener = (func) => {
    $(".sidebar.item").click(func);
};

//-------------------- Bus Time --------------------//

/*
    UIUpdateStationColor: color -> void
    - update station button's color
*/
var UIUpdateStationColor = (color) => {
    $("#current .button").removeClass("red");
    $("#current .button").removeClass("green");
    $("#current .button").removeClass("blue");
    $("#current .button").addClass(color.toLowerCase());
};

/*
    UIUpdateStationText: text -> void
    - update station button's text
*/
var UIUpdateStationText = (text) => {
    $("#current .button").html(`<i class="bus icon"></i> ${text}`);
};

/*
    UIUpdateStation: color, text -> void
    - update station button
*/
var UIUpdateStation = (color, text) => {
    UIUpdateStationColor(color);
    UIUpdateStationText(text);
};

/*
    UIUpdateTableColor: color -> void
    - update table's color
*/
var UIUpdateTableColor = (color) => {
    $("table").removeClass("red");
    $("table").removeClass("green");
    $("table").removeClass("blue");
    $("table").addClass(color.toLowerCase());
};
