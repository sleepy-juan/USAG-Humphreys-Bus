/*
    time.js
    - helper functions for time management
*/

// Assume a time object as:
//
// {
//      hours: <HOURS>,
//      minutes: <MINUTES>,
// }

//---------- Formatting ----------//

/*
    formatTime: {int, int} -> string
    - take a time object and return formatted string with form of HH:MM
*/
var formatTime = (time) => {
    shr = String(time.hours);
    if (time.hours < 10) shr = "0" + shr;
    smn = String(time.minutes);
    if (time.minutes < 10) smn = "0" + smn;
    return shr + ":" + smn;
};

/*
    formatDate: Date -> string
    - take a Date object and return formatted strig with form of HH:MM
*/
var formatDate = (date) => {
    return formatTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
    });
};

/*
    deformatTime: string -> {int, int}
    - take formatted string and return a time object
*/
var deformatTime = (stime) => {
    hr = parseInt(stime.slice(0, 2));
    mn = parseInt(stime.slice(3, 5));

    return {
        hours: hr,
        minutes: mn,
    };
};

/*
    deformatDate: Date -> {int, int}
    - take Date and return a time object
*/
var deformatDate = (date) => {
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
    };
};

//---------- Time Addition / Subtraction ----------//

/*
    addQuater: time -> time
    - add 15 minutes and return time
*/
var addQuater = (time) => {
    time.minutes += 15;
    if (time.minutes > 60) {
        time.hours += 1;
        time.minutes -= 60;
    }
    return time;
};

/*
    subQuater: time -> time
    - subtract 15 minutes and return time
*/
var subQuater = (time) => {
    time.minutes -= 15;
    if (time.minutes < 0) {
        time.hours -= 1;
        time.minutes += 60;
        if (time.hours < 0) {
            time.hours += 24;
        }
    }
    return time;
};

//---------- Time Comparison ----------//

/*
    earlierThan: time, time -> boolean
    - return whether the first time is earlier than the second one
*/
var earlierThan = (t1, t2) => {
    if (t1.hours < t2.hours) return true;
    if (t1.hours === t2.hours && t1.minutes < t2.minutes) return true;
    return false;
};

/*
    laterThan: time, time -> boolean
    - return whether the first time is later than the second one
*/
var laterThan = (t1, t2) => {
    if (t1.hours > t2.hours) return true;
    if (t1.hours === t2.hours && t1.minutes > t2.minutes) return true;
    return false;
};

/*
    equalTo: time, time -> boolean
    - return whether two times are equal
*/
var equalTo = (t1, t2) => {
    return t1.hours === t2.hours && t1.minutes === t2.minutes;
};
