/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

var a = 3
var b = -7
var c = 2

var result

result = a * b * c

if (result<0) {
    console.log('The sign of the product is -')
}
else {
    console.log('The sign of the product is +')
}

/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var a = -5
var b = -2
var c = -6
var d = 0
var e = -1

if (a>b && a>c && a>d && a>e) {
    console.log('Largest number is ' + a)
}
else if (b>c && b>d && b>e) {
    console.log('Largest number is ' + b)
}
else if (c>d && c>e) {
    console.log('Largest number is ' + c)
}
else if (d>e) {
    console.log('Largest number is ' + d)
}
else {
    console.log('Largest number is ' + e)
}

/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

var a = 0
var b = -1
var c = 4

if (a>b && a>c) {
    if (b>c) {
        console.log('Order of numbers is ' + a,b,c)
    }
    else {
        console.log('Order of numbers is ' + a,c,b)
    }
}
else if (b>a && b>c) {
    if (a>c) {
        console.log('Order of numbers is ' + b,a,c)
    }
    else {
        console.log('Order of numbers is ' + b,c,a)
    }
}
else {
    if (a>b) {
        console.log('Order of numbers is ' + c,a,b)
    }
    else {
        console.log('Order of numbers is ' + c,b,a)
    }
}

/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X */

var a = 10;
var b = 7;

// varijabla a

if (typeof a === 'number') {
    if (a%2 === 0) {
        console.log('Variable a is a number: ' + a/2)
    }
    else {
        console.log('X')
    }
} 
else {
    console.log('Variable a is not a number')
}

// varijabla b

if (typeof b === 'number') {
    if (b%2 === 0) {
        console.log('Variable b is a number: ' + b/2)
    }
    else {
        console.log('X')
    }
} 
else {
    console.log('Variable b is not a number')
}

/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console. */

var a = 30;
var b = 20;

if (a>b) {
    console.log (a + ' is the larger number');
}
else {
    console.log (b + ' is the larger number');
}

/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */

var C;
var F = 140;
if (typeof C != 'undefined') {
    F = (9*C/5) + 32;
    console.log ( C + ' Celsius is ' + F + ' Fahrenheit');
}
else {
    C = ((F - 32)*5)/9;
    console.log ( F + ' Fahrenheit is ' + C + ' Celsius')
}


/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38 */

var a = 11

if (a>13) {
    console.log('The double difference is ' + ((13-a)*2));
}
else {    
    console.log('The difference is ' + (13-a));
}

/* Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48 */

var a = 8
var b = 8

if (a === b) {
    console.log('The number are same ' + ((a+b)*3))
}
else {
    console.log('The sum is ' + (a+b))
}

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10 */

var a = 40;
var b = 10;

if (a === 50 || b === 50 || (a+b) === 50) {
    console.log('true')
}
else {
    console.log('-');
}

/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400 */

var a = 256 

if (a>20 && a<100) {
    console.log('The number is between 20 and 100');    
}
else if (a>100 && a<400) {
    console.log('The number is between 100 and 400');  
}
else {
    console.log('The number is not in range');
}
