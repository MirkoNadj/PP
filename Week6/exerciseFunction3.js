
/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"  */


function insertStr(orgStr, insStr, pos) {
    var newStr = '';
    if (pos === undefined) {
        pos = 0;
    }
    for (var i = 0; i < orgStr.length; i++) {
        if (i !== pos) {
            newStr += orgStr[i];
        }
        else {                                             
            newStr += insStr; 
            newStr += ' ';
            newStr += orgStr[pos];
        }
    }
    return newStr;
}

console.log(insertStr('My random string', 'JS', 10));

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]  */

function joinElements(orgArr, joinStr) {
    joinStr = '';
    for (var i = 0; i < orgArr.length; i++) {
        if (orgArr[i] === undefined || orgArr[i] === null || isNaN(orgArr[i]) || orgArr[i] === Infinity || orgArr[i] === false) {
            joinStr += ' ';
        }
        else {
            joinStr += orgArr[i];            
        }
    }
    return joinStr;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));



/* 3 Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]  */

function filterFalsy (falsyArr) {
    var newArr = [];
    for (var i = 0; i < falsyArr.length; i++) {
        if (!!falsyArr[i] !== false) {
            newArr[newArr.length] = falsyArr[i];            
        }
    }
    return newArr;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 4.Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number  */


function reverseNum(num) {
    var numStr = num + '';
    var numStrRev = ''
    for (var i = numStr.length-1 ; i >= 0; i--) {
        numStrRev += numStr[i]; 
    }
    return parseInt(numStrRev);
}

console.log(reverseNum(12345));



/* 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]   */  


function lastN(arr,n) {
    var lastArr = [];
    if (n === undefined) {
        lastArr[0] = arr[arr.length-1];
    }
    else {
    j = 0;
    for (var i = arr.length-n; i < arr.length; i++) {
        lastArr[j] = arr[i];
        j++;
    }
    }
    return lastArr;
}

console.log(lastN([7, 9, 0, -2], 2));

/* 6.Write a function to create a specified number of elements with pre-filled numeric value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]    */

function createArr(numOf,elem) {
    if (elem === undefined) {
        elem = null;
    }
    var arrOfElem = [];
    var i = 0;
    while (i < numOf) {
        arrOfElem[i] = elem;
        i++; 
    }
    return arrOfElem;
}

console.log(createArr(6,0));



/* 7. Write a function that says whether a number is perfect. 
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/


function perfNum(p) {
    var sum = 0;
    for (i = 1; i < p; i++) {
        if (p%i === 0) {
            sum += i; 
        }
    }
    return (sum === p);
}

var number = 28;

console.log('Is ' + number + ' a perfect number? ' + perfNum(number));



/* 8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */

function wordFind(stringW, word) {
    var checkWord = '';
    var countW = 0;
    stringW +=' ';
    for (var i = 0; i < stringW.length; i++) {
        if (stringW[i] !== ' ') {
            checkWord += stringW[i];
        }
        else {
            if (checkWord === word) {
                countW++;
            }                                               
            checkWord = ''
        }
    }
    return '\'' + word + '\' was found ' + countW + ' times';
} 
console.log(wordFind('The fox', 'fox'));


/* 9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideMail(eMail) {
    var restMail = '';
    var hMail = '';
    for (var i = 0; i <= eMail.length; i++) {
        if (eMail[i] === '@') {
            for (var z = i + 1; z < eMail.length; z++) {
            restMail += eMail[z];
        }
        break;
        }
    }
    hMail = eMail[0] + eMail[1] + eMail[2] + '...@' + restMail;
    return hMail;
}

console.log(hideMail("myemailaddress@bgit.rs"));



/* 10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]  */

function mostFreq(arrF) {
    var countF = 0;
    var count = 0;
    var mostF;
    for (var i = 0; i < arrF.length; i++) {
        for (var j = i + 1; j < arrF.length-1; j++) {
            if (arrF[i] === arrF[j]) {
                countF++;
            }
        }
        if (countF > count) {
            mostF = arrF[i];
            count = countF;
        } 
    }
    return 'Most frequent element is ' + mostF;
}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));