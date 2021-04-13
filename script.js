// Exercise A
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// Result: ["nice", "awesome", "tof", "cool"]


// Exercise B
const amountOfElementsInArray = function (array) {
    return array.length;
};

console.log(amountOfElementsInArray(['apples', 'pears', 'lemons']));
// Result: 3


// Exercise C
const selectBelgiumFromBenelux = function (array) {
    return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"]));
// Result: "Belgium" 


// Exercise D
const lastElementInArray = function (array) {
    return array[array.length - 1];
};

console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"]));
// Result: "Turtle"


// Exercise E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
    //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
    const newArray = array.slice(1, 4);
    return newArray;
};

const impeachTrumpSplice = function (array) {
    const removedElement = array.splice(0, 1);
    return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


const presidents2 = ["Trump", "Obama", "Bush", "Clinton"]

console.log(presidents2.slice(1, 4));
// Result: ["Obama", "Bush", "Clinton"]


// Exercise F
const stringsTogether = function (array) {
    return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//Result: "Winc Academy is leuk ;-}"  

const stringsTogether2 = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

console.log(stringsTogether2.join(' '));
//Result: "Winc Academy is leuk ;-}"


// Exercise G
const combineArrays = function (array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1,2,3], [4,5,6])); 
// Result: [1,2,3,4,5,6]