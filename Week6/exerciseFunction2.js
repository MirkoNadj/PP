/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/

function checkIfString(check) {
    ((typeof check)) === 'string' ? c = true : c = false;
    return c;
    }

console.log(checkIfString('My random string'));
console.log(checkIfString(125658));

/* 2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false  */


var stringCheck ="My random string"

function isStringBlank(string) {
    var countSpace = 0;
    var countChar = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            countSpace ++;
        }
        else {
            countChar ++;
        }
    }
    if (countSpace !== 0 && countChar === 0) {
        return true
    }
    else {
        return false
    }
} 

console.log(isStringBlank(stringCheck));


/* 3. Write a function that concatenates a given string 5 times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"   */

function conc(string,n) {
    var finalString = '';
    for (var i = 0; i < n; i++) {
        finalString += string
    }
    return finalString;
}

console.log(conc('Ha',3));



/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2  */

function letOccur(str, a) {
    var countLetter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === a) {
            countLetter ++
        }
    }
    return countLetter;
}

var string = 'My random string';
var letter = 'n';

console.log('The letter \"' + letter + '\" occurs ' + letOccur(string,letter) + ' time/s');



/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

function firstOccur(string,char) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            position = i+1;
            break;                                      // break out of loop after first occurance
        }
        else position = -1;
    }
    return position;
}

var stringToCheck = 'Check This String For Some Letter';
var character = 'e';

console.log(firstOccur(stringToCheck,character));


/* 6 Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function lastOccur(string,char) {
    for (var i = string.length-1; i >= 0; i--) {
        if (string[i] === char) {
            position = i+1;
            break;                                      // break out of loop after first occurance
        }
        else position = -1;
    }
    return position;
}

var stringToCheck = 'Check This String For Some Letter';
var character = 'e';

console.log(lastOccur(stringToCheck,character));


/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]        */

function convert(stringToArray) {
    arrayNew = [];
    for (var i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i] === ' ') {
            arrayNew[i] = null;
        }
        else {
            arrayNew[i] = stringToArray[i];
        }
    }
    return arrayNew;
}

console.log(convert('My random string'));



/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function primeNum(p) {
        var isPrime = true;
    for (var i = 2; i < 10; i++) {
        if (p%i === 0 && p !== i ) {         
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

console.log('Is this a prime number? ' + primeNum(6299));


/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"            */


function replaceSpace(stringToSeparate,separator) {
    if (separator === undefined) {
        separator = '-';
    }
    stringNew = ''
    for (var i = 0; i <stringToSeparate.length; i++) {
        if (stringToSeparate[i] === ' ') {
            stringNew += separator;
        }
        else {
            stringNew += stringToSeparate[i];
        }
    }
    return stringNew;
}

console.log(replaceSpace('My random string'));


/* 10. Write a function to get the first n characters and add “...” at the end of newly created string. */


function beginOfString(stringToShort,n) {
    var shortNewString = '';
    for (var i = 0; i < n; i++) {
        shortNewString += stringToShort[i];
    }
    shortNewString += '...';
    return shortNewString;
}

console.log(beginOfString('A long, long time ago there was a small kingdom.', 17));



/* 11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]         */

function convertStrToNum(arrStr) {
    var strNum = [];
    var j = 0;
    for (var i = 0; i < arrStr.length; i++) {
        if (isFinite(parseFloat(arrStr[i]))) {
        strNum[j] = parseFloat(arrStr[i]);
        j++
        }
      //  console.log('Na poziciji i = ' + i +' Element stringa je' + arrStr[i] +  '\n');
      //  console.log('Trenutna pozicija j = ' + (j - 1) +' Novi niz je ' + strNum +  '\n');
    }
    return strNum;
}

console.log('New string without non-numeric values is: ');
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity, '6']));



/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */


function pension(birth,currentY,gender) {
    var ret;
    if (gender === 'man') {
        ret = 65 - (currentY - birth);
    }
    else if (gender === 'woman') {
        ret = 60 - (currentY - birth);
    }
    else {
        return 'Please check input.';
    }
    if (ret > 0) {
        return ret + ' years to retirement';
    }
    else {
        return 'Already retired'
    }
    
}

console.log(pension(1981,2021,'man'));
console.log(pension(1960,2021,'woman'));



/* 13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th       */


function humanize(num) {
    if (num > 10 && num < 14) {
        hum = num + 'th'
    }
    else {
        moduo = num%10;
        switch (moduo) {
            case 1:
                hum = num + 'st';
                break;
            case 2:
                hum = num + 'nd';
                break;
            case 3:
                hum = num + 'rd';
                break;
            case 4:
            case 0:
                hum = num + 'th';
                break;        
        }
    }
    return hum;
}

console.log(humanize(11));
console.log(humanize(12));
console.log(humanize(13));
console.log(humanize(1));
console.log(humanize(2));
console.log(humanize(3));
console.log(humanize(10));
console.log(humanize(1021));
console.log(humanize(100));






