// Only change code below this line
function splitArrayInGroups(arr, n) {
    var newArray = [...arr];
    var result = [];
    var myArray = 0

    while (newArray.length > 0) {
        result.push(newArray.splice(0, n));
        myArray++
        if (myArray === n) {
            break;
        }
    }
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroups;