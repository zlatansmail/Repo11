var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];

    for (var row = 0; row < newMonitorsList.length; row++) {
        monitorsList.push([newMonitorsList[row], row + 1]);
    }

    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;