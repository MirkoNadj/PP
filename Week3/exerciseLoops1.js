/* 0.Write a program that will iterate from 0 to 10 and display squares of numbers.*/
console.log('Exercise 0.\n\n');


var i = 0;
while (i <= 10) {
    console.log(i*i);
    i++;
}



console.log('\n\n');
/* 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
console.log('Exercise 1.\n\n');



for (var i = 0; i <= 15; i++) {
    if (i%2 === 0) {
        console.log('The number ' + i + ' is even');
    }
    else { 
        console.log('The number ' + i + ' is odd');
    }
}



console.log('\n\n');
/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/
console.log('Exercise 2.\n\n');



var sum = 0;
var counter = 0;
while (sum < 1000) {
    console.log('Trenutna suma je ' + sum);
    if (counter % 3 === 0 && counter % 5 === 0) {                   
        console.log('Broj ' + counter + ' je deljiv')
        sum = sum + counter;        
    }
    else {
        console.log(counter + ' nije deljiv');
    }
    counter++;
}



console.log('\n\n');
/*3. Write a program to compute the sum and product of an array of integers.*/
console.log('Exercise 3.\n\n');



var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var countAr = 0;
var integerSum = 0;
var integerPr = 1;                                          // not 0 because of multiplication

while (countAr < integers.length) {
    console.log('Current counter is ' + countAr);
    console.log('Current array element is ' + integers[countAr]);
    integerSum = integerSum + integers[countAr];
    integerPr = integerPr * integers[countAr];
    console.log('Current sum is ' + integerSum);
    console.log('Current product is ' + integerPr);
    countAr++;
    console.log('---Loop back---');
    }

console.log('The sum of the array is ' + integerSum);
console.log('The product of the array is ' + integerPr);



console.log('\n\n');
/*4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]; */
console.log('Exercise 4.\n\n');


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
xcount = 0;
var arrString = '';

while (xcount < x.length) {
    console.log('Current index is ' + xcount);
    console.log('Current element is a ' + typeof x[xcount]);
    console.log('The value is: ' + x[xcount]);
    arrString = arrString + x[xcount];
    xcount++;
    console.log('--- Loop back ---');
}

console.log('The whole array string is \"' + arrString + '\"');


console.log('\n\n');
/*5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];                                                                 */
console.log('Exercise 5.\n\n');

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];  
var countMainArr = 0;
var countSubArr

while (countMainArr < a.length) {
    console.log('Current index of main array element is: ' + countMainArr );
    countSubArr = 0;
    while (countSubArr < a[countMainArr].length) {
        console.log('Nested array element is: ' + a[countMainArr][countSubArr]);
        countSubArr++;
        console.log('--- Nested loop back ---');
    }
    countMainArr++;
    console.log('--- Main loop back ---');
}


console.log('\n\n');
/*6. Write a program that outputs the sum of squares of the first 20 numbers.*/
console.log('Exercise 6.\n\n');


var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var countF = 0;
var sumSqr = 0;

while (countF < 20) {
    console.log('Current number is ' + f[countF]);
    sumSqr = sumSqr + (f[countF]*f[countF]);
    console.log('The square is: ' + (f[countF]*f[countF]) + ' \n --- Loop back ---');
    countF++;
}
console.log('The sum of squares is: ' + sumSqr);



console.log('\n\n');
/*7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
David 80
Marko 77
Dany 88
John 95
Thomas 98
The grades are computed as follows :
< 60% F
< 70% D
< 80% C
< 90% B
< 100% A */
console.log('Exercise 7.\n\n');



var s = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var gradeSum = 0;

for (var  i = 0; i < s.length; i++) {
    gradeSum = gradeSum + s[i][1];
}
console.log(gradeSum);
var average = gradeSum/s.length;

if (average < 60) {
    console.log('The grade is F');
}
else if (average < 70) {
    console.log('The grade is D');
}
else if (average < 80) {
    console.log('The grade is C');
}
else if (average < 90) {
    console.log('The grade is B');
}
else if (average < 100) {
    console.log('The grade is A');
}




console.log('\n\n');
/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).*/
console.log('Exercise 8.\n\n');

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log('Number: ' + i);
    }
}