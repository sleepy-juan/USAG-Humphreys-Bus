/*
    bustime.js
    - functions for calculating bus times
*/

/*
    depart: string, int, boolean -> list of {string, time}
    - get bus, station and holiday scheudule for tomorrow and return the list of stations and thier exp. arriving time
*/
var depart = (bus, station, isHoliday) => {
    bus = bus.toLowerCase();
    var now = new Date();
    var day = now.getDay();
    var openingHours = [];
    if (day >= 1 && day <= 5) openingHours = database[bus].openingWeekday;
    else openingHours = database[bus].openingWeekend;

    var openingOfStation = deformatTime(openingHours[station]);
    now = deformatDate(now);
    if (laterThan(openingOfStation, now)) {
        var busSchedule = [];
        for (var i = station; i < openingHours.length; i++) {
            busSchedule.push({
                station: database[bus].stations[i],
                time: openingHours[i],
            });
        }
        return busSchedule;
    }

    var ending = "24:00";
    if (bus === "red") {
        if ((day === 4 && isHoliday) || day === 5 || day === 6 || (day === 7 && isHoliday)) ending = "25:00";
    }
    if (bus === "blue") {
        if (day >= 1 && day <= 5) {
            if (day === 5 || (day === 4 && isHoliday)) ending = "24:40";
            else ending = "23:55";
        } else {
            if (day === 6 || isHoliday) ending = "24:45";
            else ending = "23:45";
        }
    }
    ending = deformatTime(ending);

    var firstBusTime = addQuater(deformatTime(openingHours[0]));
    var busTime = addQuater(openingOfStation);
    var busIdx = 1;
    while (!laterThan(firstBusTime, ending)) {
        if (laterThan(busTime, now)) {
            var busSchedule = [];
            for (var i = station; i < openingHours.length; i++) {
                var temp = deformatTime(openingHours[i]);
                for (var j = 0; j < busIdx; j++) temp = addQuater(temp);
                busSchedule.push({
                    station: database[bus].stations[i],
                    time: formatTime(temp),
                });
            }
            return busSchedule;
        }
        firstBusTime = addQuater(firstBusTime);
        busTime = addQuater(busTime);
        busIdx += 1;
    }
    return null;
};
