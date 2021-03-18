/* Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too. */

var array1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
var array2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
var sum1 = sum2 = 0;
var c = d = 0;

while (c < array1.length) {
    sum1 = sum1 + array1[c]
    c++
}
while (d < array2.length) {
    sum2 = sum2 + array2[d];
    d++
}

console.log('Sum of all elements is: ' + (sum1 + sum2));




/* Exercise 2)
Using a for loop print all even numbers up to and including n. Don’t include 0. */

var n = 22;

console.log ('Printing all even numbers: ');

for (var i = 1; i <= n; i++) {
    (i % 2 === 0) ? console.log(i) : console.log(' ');
}



/* Exercise 3)
Using a for loop output the elements in reverse order */

var arr = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];
var rev = [];

console.log('Reversed order: ');
for (var i = 0; i < arr.length; i++) {
    console.log(arr[arr.length - 1 - i]);
}




/* Exercise 4)
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length. */

var int1 = [4, 6, 7];
var int2 = [8, 1, 9];
var intsum = [];

for (var i = 0; i < int1.length; i++) {
    intsum[i] = int1[i] + int2[i];
}

console.log('Sum is:');
console.log(intsum);




/* Exercise 5)

Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.  */

var strO = 'javascript';
var changeToLetter = 'Z';
var strZ = '';

for (var i = 0; i < strO.length; i++) {
    (i % 2 !== 0) ? strZ = strZ + changeToLetter : strZ = strZ + strO[i];
}

console.log(strZ);




/* Exercise 6)

Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. */

var string = 'don\'t know why';
var letter = 'y'; 

for (var i = 0; i < string.length; i++) {
    string[i] === letter ? ifLetter = true : ifLetter = false;
}
    ifLetter ? console.log('Yes, the string contains the given letter') : console.log('No');



/* Exercise 7)

Given a number n Calculate the factorial of the number */

var n = 0;
var fact = 1;                        // not 0 because of multiplication

while (n > 0) {
    fact = fact * n;
    n--;
}
console.log('Factorial is: ' + fact);


/*Exercise 8)
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. */

var pin = 1234;
var quess = [2345, 5678, 1234, 4563];

for (var i = 0; i <= 4; i++ ) {
    console.log('Input your PIN: ' + quess[i]);
    if (quess[i] === pin) {
        console.log('That was correct!');
        break;                                              // break out of loop if true
    }
    else {
        console.log('That was wrong');
    }
}

/* Exercise 9)
Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run. */

var str1 = 'racecar';
var str2 = 'Java';
var isSym;

for (var start = 0, end = str1.length - 1; start < end; start++, end--) {
    str1[start] === str1[end] ? isSym = true : isSym = false;
}
isSym === true ? console.log('string1 IS a palindrome.\n') : console.log('string1 is NOT a palindrom.\n');

for (var start = 0, end = str2.length - 1; start < end; start++, end--) {
    start === end ? isSym = true : isSym = false;
}
isSym === true ? console.log('string2 is a palindrome.\n') : console.log('string2 is NOT a palindrom.\n');

/* Exercise 10)

This is a code wars kata. click here to train on “Grasshopper – Summation” on
code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */

var num1 = 2;
var num2 = 8;
var sum1 = 0;
var sum2 = 0;
var k = 0;

for (var i = 0; i <= num1; i++) {                   // using FOR loop for first number
    sum1 = sum1 + i;
}
console.log('Summation is: ' + sum1);

while (k <= num2) {                                 // using WHILE loop for second number
    sum2 = sum2 + k;
    k++;
}
console.log('Summation is: ' + sum2);