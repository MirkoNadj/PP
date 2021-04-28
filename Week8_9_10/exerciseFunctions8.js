/*  IIFE = Immediately Invoked Function Expressions

1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
    Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]         */
'use strict'
var switchArrayEl = (function (array) {
        var tempForSwitch = [];
        tempForSwitch[0] = array[0];
        array[0] = array[array.length-1];
        array[array.length-1] = tempForSwitch[0];
        return array;
    
    })([4, 5, 11, 9]);

console.log(switchArrayEl);

/* 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5 
Output: 20                              */
'use strict'
var surfaceOfRectangle = (function (sideA, sideB) {
    var surfaceArea = sideA * sideB;
    return surfaceArea;
})(4,5);

console.log(surfaceOfRectangle);

/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
    Input: prograMming
    Output: progra**ing, 2              */
'use strict'
var replacedLetterM = (function (string) {
    var newString = '';
    var replaceCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'M' || string[i] === 'm') {
            newString += '*';
            replaceCount++;
        }
        else newString += string[i];
    }
    return newString + ', ' + replaceCount;
})('prograMming');

console.log(replacedLetterM);


/* 4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
    Output: pera.peric@gmail.com       */
'use strict'
var sugMail = (function (name, surname) {
    var sMail;
    return sMail = name + '.' + surname + '@gmail';
})('pera', 'peric');

console.log(sugMail);


/* 5. Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28    */

//'use strict'
function octalToDecimal(octalNum) {
    var decimalNum = 0;
    var octalNumString = octalNum + '';
    var oct = 8;
    for (var i = 0; i < octalNumString.length-2; i++) {
        for (var p = 1; p < octalNumString.length - 1 - i; p++) {
            oct *= oct;
        }
        decimalNum += parseInt(octalNumString[i]) * oct;
    }
    console.log(decimalNum)
    decimalNum += (parseInt(octalNumString[octalNumString.length-2]) * oct) + parseInt(octalNumString[octalNumString.length-1]);
    return decimalNum;
}

console.log(octalToDecimal('034'));

// or like this

'use strict'
var octToDec = (function (octnum,radix) {
    var octnumString = octnum + '';
    return parseInt(octnum,radix);
})('034',8);

console.log(octToDec);


/* 6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

    Input: JSGuru123
    Output: Your password is cool! */

'use strict'
var succesCallback = function() {
    console.log('Your password is cool!');
};
var errorCallback = function() {
    console.log('Your password is invalid!');
};
var isPassValid = (function (password) {
    var passArray = [];
    var isValid = false;
    if (password.length >= 6) {                                // turning string element into array element, one by one
        for (var i = 0; i < password.length; i++) {
            passArray[0] = password[i]
            if (isNaN(parseInt(passArray[0])) === false) {     // checking if element is a number by parsing it and then 
                isValid = true;                                // checking if parsing returns NaN or not
                break;
            }
        }
        console.log(passArray)
    }
    if (isValid) {
        return succesCallback();
    }
    else {
        return errorCallback();
        }        
})('JSGuru123');

/* 7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

'use strict'
var filteredOdd = (function (array) {
    var fArray = array.filter(function(number) {
        return number%2 === 0;
    });
    return fArray;
})([2, 8, 11, 4, 9, 3]);

console.log(filteredOdd);
