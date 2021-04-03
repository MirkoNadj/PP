/* 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]         */

function convertArr(arrOfStrings) {
    var numArr = [];
    for (var i = 0; i <arrOfStrings.length; i++) {
        if (isFinite(parseFloat(arrOfStrings[i]))) {
            numArr[numArr.length] = arrOfStrings[i]
        }
    }
    return numArr;
}

console.log(convertArr(["1", "21", undefined, "42", "1e+3", Infinity]));


/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”     */


function joinElem(arr) {
    var elStr = '';
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && arr[i] !== null) {
            elStr += arr[i];
        }
    }
    return elStr;
}
console.log(joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 3. Write a program to filter out falsy values from the array.  

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]   */


function filterFalsy(arr) {
    var arrF = [];
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] !== false) {
            arrF[arrF.length] = arr[i];
        }
    }
    return arrF;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 4. Write a program that calculates a number of integer values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3    */

function countInt(arr) {
    var countI = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) === arr[i]) {
            countI++
        }
    }
    return countI;
}

console.log(countInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


/* 5. Write a program that calculates a number of float values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2     */ 

function countFloat(arr) {
    var countFl = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i]) !== parseInt(arr[i]) && !!arr[i]) {
            countFl++;
        }
    }
    return countFl;
}

console.log(countFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

console.log(!!Infinity);
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!false);
console.log(!!0);
console.log(!!'');

console.log(parseInt(Infinity));
console.log(parseInt(undefined))
console.log(parseInt(null))
console.log(parseInt(NaN))
console.log(parseInt(false))
console.log(parseInt(0))
console.log(parseInt(''))

console.log(parseFloat(Infinity));
console.log(parseFloat(undefined))
console.log(parseFloat(null))
console.log(parseFloat(NaN))
console.log(parseFloat(false))
console.log(parseFloat(0))
console.log(parseFloat('1e+10'))
console.log(parseFloat(8));


console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite(undefined));

console.log(isFinite(null));
console.log(isFinite(false));
console.log(isFinite(0));
console.log(isFinite(''));
console.log(isFinite(8));
