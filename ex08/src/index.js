function myMutation(arr) {
    var stringOne = arr[0];
    var stringTwo = arr[1];

    for (i = 0; i < stringTwo.length; i++) {
        if (stringOne.toLowerCase().includes(stringTwo[i].toLowerCase()) == false)
            return false;
    }

    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qurstu"]))
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "AArmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;