// 1. Write a program that calculates the maximum of two given numbers.

function max(a,b) {
    if (a>b) {
        return 'Max number is ' + a;
    }
    else if (b>a) {
        return ' Max number is ' + b;
    }
    else {
        return 'number are equal';
    }
}

var result = max(4, 11);
console.log(result);

// 2. Write a program that checks if a given number is odd.

function odd(c) {
    if (c%2 === 0) {
        return 'Number ' + c + ' is even'
    }
    else {
        return 'Number ' + c + ' is odd'
    }
}
var checkOdd = odd(4);
console.log(checkOdd);


// 3. Write a program that checks if a given number is a three digit long number.

function digitCheck(t) {
    if (t > 99 && t < 1000) {
        return t + ' is a three digit number'
    }
    else {
        return t + ' is NOT a three digit number'
    }
}

var d = digitCheck(345);
console.log(d);


// 4. Write a program that calculates an arithmetic mean of four numbers.

function ArMean(f,g,h,k) {
    return mean = (f + g + h + k)/4;
}

var m = ArMean(1,2,3,4);
console.log('Arithmetic mean of given numbers is ' + m);

/* 5. Write a program that draws a square of a given size. For example, if the size of square
       is 5 the program should draw:
*****
*   *
*   *
*   *
*****
*/ 


function sq(numOfStars) {                   
    var starFinal = '';                                            // Final string
    for (var i = 1; i <= numOfStars; i++) {                        // Main loop for creating rows 
        if (i === 1 || i === numOfStars) {                         // condition for creating the first and last row
            var starL = '';
            for (var k = 0; k < numOfStars; k++) {                 // Loop for first and last row
                starL = starL + '*'; 
            }
            starFinal = starFinal + starL + '\n';                  // Adding created string to the final string
        }
            else {
                var starM = '';
                for (var j = 1; j <= numOfStars; j++) {            // Loop for creating middle rows
                    if (j === 1 || j === numOfStars) {             // Condition for printing '*' or ' ' string
                        var starM = starM + '*';
                    }    
                    else {            
                        starM = starM + ' '; 
                    }
                }
                starFinal = starFinal + starM + '\n';              // Adding created middle row string to the final string
            }
    }
    return starFinal;
}
var star = sq(8);
console.log(star);


/* 6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *                       */


function stars(f,s,k) {
    var starSumF = '';
    for (var i = 0; i < f; i++) {
        starSumF = starSumF + '*'; 
    }
    var starSumS = '';
    for (var j = 0; j < s; j++) {
        starSumS = starSumS + '*'; 
    }
    var starSumK = '';
    for (var i = 0; i < k; i++) {
        starSumK = starSumK + '*'; 
    }
    return starSumF + '\n' + starSumS + '\n' + starSumK;

}

var starsNum = stars(5,3,7);
console.log(starsNum);



// 7. Write a program that calculates a number of digits of a given number.

function numberOf(w) {
    var string = w + '';
    return lengthOf = string.length;
}

numberDigit = numberOf(12553);
console.log('Given number has ' + numberDigit + ' digits');

/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3                                          */

function appe(a,e) {
    var counter = 0;
    for (var i = 0; i<a.length; i++) {
        if (a[i] === e) {
            counter++;
        }
    }
    return counter;
}

var a = [2, 4, 7, 8, 7, 7, 1];
var e =7;

var app = appe(a,e);

console.log('Number ' + e + ' appears ' + app + ' times');

// Write a program that calculates the sum of odd elements of a given array.

function oddNumber(arrOdd) {
    var sumOdd = 0; 
    for (var i = 0; i < arrOdd.length; i++) {
        if (arrOdd[i]%2 !== 0 ) {
            sumOdd += arrOdd[i];
        }
    }
    return sumOdd;
}

var arrr = [1, 2, 3, 4, 5];
var oddArray = oddNumber(arrr);


console.log('The sum of odd elements is ' + oddArray);

/* Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */

function letter(Ar) {
    var counta = 0;
    var countA = 0;
    for (var i = 0; i < Ar.length; i++) {
        if (Ar[i] === 'a' || Ar[i] === 'A') {
            counta++;
        }
    }
    return counta;
}
var check = 'futuramAAAAfuturmA';
var letta = letter(check);
console.log('Letters \'A\' and \'a\' appear ' + letta + ' times');

/* Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function abc(str,z) {
    var strSum = '';
    for (var i = 0; i <= z; i++) {
        strSum = strSum + str; 
    }
    return strSum;
}

var stringCon = abc('abc', 7)
console.log(stringCon);