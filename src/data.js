/*
    DATA
*/

var redStations = [
    "PED/walkthru gate",
    "AV/CPX Gate",
    "1-17 CAV, P-860",
    "4-2 ARB S-869",
    "New Dental Clinic",
    "AV/CPX Gate",
    "Bus Terminal",
    "Lodging S-121",
    "USO S-375",
    "Quarry Gate",
    "2nd CAB/CDC",
    "Medical/Dental Clinic",
    "Super Gym",
    "School",
    "New Commissary",
    "New PX",
    "One Stop Bldg",
    "One Stop Bldg A",
    "Tomahawk DFAC",
    "VMF S-7412",
    "VMF S-7515",
    "HQs P-7621",
    "VMF S-7515",
    "VMF S-7412",
    "Tomahawk DFAC",
    "Spartan DFAC S6321",
    "Bldg # P-6315",
    "Chapel P-6360",
    "New Barracks P-6001",
    "Talon DFAC S-2097",
    "3rd MI Bn",
    "TMP P-7010",
    "ROKA HQs",
    "8th Army HQs",
    "S-12114",
    "Provider DFAC S1291",
    "Zoeckler station S1210",
    "PED/walkthru gate",
];

var redStartingsWeekday = [
    "0530",
    "0534",
    "0536",
    "0537",
    "0539",
    "0541",
    "0547",
    "0549",
    "0550",
    "0553",
    "0554",
    "0555",
    "0557",
    "0558",
    "0600",
    "0602",
    "0604",
    "0606",
    "0609",
    "0610",
    "0611",
    "0613",
    "0614",
    "0615",
    "0616",
    "0619",
    "0620",
    "0621",
    "0623",
    "0625",
    "0626",
    "0628",
    "0632",
    "0634",
    "0636",
    "0638",
    "0640",
    "0641",
];

var redStartingsWeekend = [
    "0730",
    "0734",
    "0736",
    "0737",
    "0739",
    "0741",
    "0747",
    "0749",
    "0750",
    "0753",
    "0754",
    "0755",
    "0757",
    "0758",
    "0800",
    "0802",
    "0804",
    "0806",
    "0809",
    "0810",
    "0811",
    "0813",
    "0814",
    "0815",
    "0816",
    "0819",
    "0820",
    "0821",
    "0823",
    "0825",
    "0826",
    "0828",
    "0832",
    "0834",
    "0836",
    "0838",
    "0840",
    "0841",
];

var greenStations = [
    "Bus Terminal",
    "Medical Clinic",
    "USO S-375",
    "Super Gym",
    "School",
    "Talon DFAC S-2097",
    "3rd MI Bn",
    "New Barracks P-6001",
    "Chapel P-6360",
    "Bldg # P-6315",
    "Spartan DFAC S6321",
    "One Stop",
    "New Commissary",
    "New PX",
    "Warrior Zone S 6813",
    "Spartan DFAC S6321",
    "Bldg # P-6315",
    "Chapel P-6360",
    "New Barracks P-6001",
    "3rd MI Bn",
    "Talon DFAC S-2097",
    "School",
    "Super Gym",
    "USO S-375",
    "Medical Clinic",
    "Bus Terminal",
    "CPX",
    "Walkthru gate",
    "Zoeckler station S-1210",
    "Provider Grill S-1291",
    "Zoeckler station S-1210",
    "Walkthru gate",
    "CPX",
    "Bus Terminal",
];

var greenStartingsWeekday = [
    "0530",
    "0533",
    "0534",
    "0536",
    "0538",
    "0539",
    "0541",
    "0543",
    "0545",
    "0546",
    "0548",
    "0550",
    "0552",
    "0554",
    "0556",
    "0558",
    "0600",
    "0601",
    "0603",
    "0605",
    "0607",
    "0608",
    "0610",
    "0612",
    "0614",
    "0616",
    "0617",
    "0621",
    "0622",
    "0624",
    "0626",
    "0627",
    "0631",
    "0632",
];

var greenStartingsWeekend = [
    "0730",
    "0733",
    "0734",
    "0736",
    "0738",
    "0739",
    "0741",
    "0743",
    "0745",
    "0746",
    "0748",
    "0750",
    "0752",
    "0754",
    "0756",
    "0758",
    "0800",
    "0801",
    "0803",
    "0805",
    "0807",
    "0808",
    "0810",
    "0812",
    "0814",
    "0816",
    "0817",
    "0821",
    "0822",
    "0824",
    "0826",
    "0827",
    "0831",
    "0832",
];

var blueStations = [
    "PED/walkthru gate",
    "Zoeckler station S1210",
    "Provider DFAC S1291",
    "S-12114",
    "8th Army HQs",
    "ROKA HQs",
    "TMP P-7010",
    "3rd MI Bn",
    "Talon DFAC S-2097",
    "New Barracks P-6001",
    "Chapel P-6360",
    "Bldg # P-6315",
    "Spartan DFAC S6321",
    "Tomahawk DFAC",
    "VMF S-7412",
    "VMF S-7515",
    "HQs P-7621",
    "VMF S-7515",
    "VMF S-7412",
    "Tomahawk DFAC",
    "One Stop Bldg A",
    "One Stop Bldg",
    "New PX",
    "New Commissary",
    "School",
    "Super Gym",
    "Quarry Gate",
    "2nd CAB/CDC",
    "Medical/Dental Clinic",
    "USO S-375",
    "Lodging S-121",
    "Bus Terminal",
    "AV/CPX Gate",
    "1-17 CAV, P-860",
    "4-2 ARB S-869",
    "New Dental Clinic",
    "AV/CPX Gate",
    "PED/walkthru gate",
];

var blueStartingsWeekday = [
    "0540",
    "0541",
    "0543",
    "0546",
    "0548",
    "0550",
    "0554",
    "0555",
    "0556",
    "0557",
    "0559",
    "0600",
    "0602",
    "0605",
    "0606",
    "0607",
    "0609",
    "0611",
    "0612",
    "0613",
    "0615",
    "0617",
    "0619",
    "0622",
    "0624",
    "0625",
    "0627",
    "0628",
    "0629",
    "0630",
    "0631",
    "0637",
    "0639",
    "0642",
    "0643",
    "0645",
    "0647",
    "0651",
];

var blueStartingsWeekend = [
    "0745",
    "0746",
    "0748",
    "0751",
    "0753",
    "0755",
    "0759",
    "0800",
    "0801",
    "0802",
    "0804",
    "0805",
    "0807",
    "0810",
    "0811",
    "0812",
    "0814",
    "0816",
    "0817",
    "0818",
    "0820",
    "0822",
    "0824",
    "0827",
    "0829",
    "0830",
    "0832",
    "0833",
    "0834",
    "0835",
    "0836",
    "0842",
    "0844",
    "0847",
    "0848",
    "0850",
    "0852",
    "0856",
];

/*
    DATA Parsers
*/
var addQuater = (time) => {
    time += 15;
    if (time % 100 >= 60) {
        time = (parseInt(time / 100) + 1) * 100 + (time % 100) - 60;
    }
    return time;
};

var subQuater = (time) => {
    time -= 15;
    if (time < 0) time += 2400;
    if (time % 100 > 60) {
        time -= 40;
    }
    return time;
};

var getNextRedBus = (stationIdx, now, day, isTomorrowHoliday) => {
    // get starting time and compare with it
    var startingsList = [];
    if (day >= 1 && day <= 5) {
        startingsList = redStartingsWeekday;
    } else {
        startingsList = redStartingsWeekend;
    }

    var starting = startingsList[stationIdx];
    starting = parseInt(starting);
    if (starting > now) {
        var busSchedule = [];
        for (var i = stationIdx; i < startingsList.length; i++) {
            busSchedule.push(redStations[i]);
            busSchedule.push(startingsList[i]);
        }
        return busSchedule;
    }

    // calculate ending time
    var ending = 2400;
    if (
        (day === 4 && isTomorrowHoliday) ||
        day === 5 ||
        day === 6 ||
        (day === 7 && isTomorrowHoliday)
    ) {
        ending = 2500;
    }

    // get next bus
    var temp = addQuater(starting);
    var idx = 1;
    while (temp <= ending) {
        if (now < temp) {
            var busSchedule = [];
            for (var i = stationIdx; i < startingsList.length; i++) {
                busSchedule.push(redStations[i]);
                var stemp = parseInt(startingsList[i]);
                for (var j = 0; j < idx; j++) stemp = addQuater(stemp);
                busSchedule.push(stemp);
            }
            return busSchedule;
        }
        temp = addQuater(temp);
        idx += 1;
    }
    return null; // no more bus today
};

var getNextGreenBus = (stationIdx, now, day) => {
    // get starting time and compare with it
    var startingsList = [];
    if (day >= 1 && day <= 5) {
        startingsList = greenStartingsWeekday;
    } else {
        startingsList = greenStartingsWeekend;
    }

    var starting = startingsList[stationIdx];
    starting = parseInt(starting);
    if (starting > now) {
        var busSchedule = [];
        for (var i = stationIdx; i < startingsList.length; i++) {
            busSchedule.push(greenStations[i]);
            busSchedule.push(startingsList[i]);
        }
        return busSchedule;
    }

    // get next bus
    var temp = addQuater(starting);
    var idx = 1;
    while (temp <= 2400) {
        if (now < temp) {
            var busSchedule = [];
            for (var i = stationIdx; i < startingsList.length; i++) {
                busSchedule.push(greenStations[i]);
                var stemp = parseInt(startingsList[i]);
                for (var j = 0; j < idx; j++) stemp = addQuater(stemp);
                busSchedule.push(stemp);
            }
            return busSchedule;
        }
        temp = addQuater(temp);
        idx += 1;
    }
    return null; // no more bus today
};

var getNextBlueBus = (stationIdx, now, day, isTomorrowHoliday) => {
    // get starting time and compare with it
    var startingsList = [];
    if (day >= 1 && day <= 5) {
        startingsList = blueStartingsWeekday;
    } else {
        startingsList = blueStartingsWeekend;
    }

    var starting = startingsList[stationIdx];
    starting = parseInt(starting);
    if (starting > now) {
        var busSchedule = [];
        for (var i = stationIdx; i < startingsList.length; i++) {
            busSchedule.push(blueStations[i]);
            busSchedule.push(startingsList[i]);
        }
        return busSchedule;
    }

    // calculate ending time
    var ending = 2400;
    if (day >= 1 && day <= 5) {
        if (day === 5 || (day === 4 && isTomorrowHoliday)) ending = 2440;
        else ending = 2355;
    } else {
        if (day === 6 || isTomorrowHoliday) ending = 2445;
        else ending = 2345;
    }

    // get next bus
    var temp = addQuater(starting);
    var idx = 1;
    while (temp <= ending) {
        if (now < temp) {
            var busSchedule = [];
            for (var i = stationIdx; i < startingsList.length; i++) {
                busSchedule.push(blueStations[i]);
                var stemp = parseInt(startingsList[i]);
                for (var j = 0; j < idx; j++) stemp = addQuater(stemp);
                busSchedule.push(stemp);
            }
            return busSchedule;
        }
        temp = addQuater(temp);
        idx += 1;
    }
    return null; // no more bus today
};

var getNextBus = (bus, stationIdx, now, day, isTomorrowHoliday) => {
    if (bus.toLowerCase() === "red") {
        return getNextRedBus(stationIdx, parseInt(now), day, isTomorrowHoliday);
    } else if (bus.toLowerCase() === "green") {
        return getNextGreenBus(stationIdx, parseInt(now), day);
    } else {
        return getNextBlueBus(
            stationIdx,
            parseInt(now),
            day,
            isTomorrowHoliday
        );
    }
};
