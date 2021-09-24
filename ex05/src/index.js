var myNestedArray = [
    ["Toblerone", 5]
];

function myNestedFunction(arr) {
    arr.push(["Milka", 3]);
    return arr;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;