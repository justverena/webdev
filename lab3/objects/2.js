let schedule = {};

function isEmpty(obj) {
    let counter = 0;
    for (let i in obj) {
        return false;
    }
    return true;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
