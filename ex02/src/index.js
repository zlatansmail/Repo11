var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    for (var row = 0; row < newTemps.length; row++) {
        var sum = 0;
        for (var col = 0; col < newTemps[row].length; col++) {
            sum = sum + newTemps[row][col];
        }

        var average = sum / newTemps[row].length;
        averageDayTemp.push(average);
    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;