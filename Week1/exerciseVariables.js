/* 1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character. */

var Mirko = 8;
var mirko = 6;


console.log(Mirko);
console.log(mirko);

/* Save a string (text) describing your current mood in a variable and print it out in console.*/

var raspolozenje = 'nije lose'

console.log(raspolozenje);

/* Feel free to play around in the console and get familiar with it.*/

var x = 3;
var y = 2;
var z = 31;
var i = 5;
var c = 4;
var k = 1.14;

/* Feel free to play around in the console and get familiar with it.*/

var r;
var p;

r = x-y-z;
p = x*i/x;
v = c/y-k*x;


console.log(r);
console.log(p);

/* Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?*/

var banana = 1.2;
var bananaKg

bananaKg = banana * 1000;

console.log('1.2kg banana ima ' + bananaKg+ 'grama');


/* How many grams weight 1.2kg of bananas? */

var s = 5
var t = 30
var cekanjeAna

cekanjeAna = s * 60;
cekanjeTom = t * 60;


console.log('Anu cekamo dodatnih ' + cekanjeAna + ' sekundi');
console.log('Anu cekamo dodatnih ' + cekanjeTom + ' sekundi');

/* How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…*/

var stick = 4
var mb
var article

mb = stick * 1024;
article = mb / 98;

console.log('We got ' + mb + 'MB of additional memory');
console.log('It can fit ' + 'articles');

/* How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it? */

var a = 2

a = a * (1+1);
a = a + a;

console.log(a);


var b = 3;

b = b + 3;

console.log(b);

var c

var c = c / (2 + 3);

console.log(c);

/* Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/

var name = 'Mirko'
var age = 39
var cat = false

console.log('My name is ' + name)
console.log(typeof name)
console.log('I am ' + age + 'years old')
console.log(typeof age)
console.log('Do I have a cat? ' + cat)
console.log(typeof cat)

/* Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var numbernu = 'number'
var truetr = true
var nullnu = null
var falsefa = 'false'
var num56 = 56
console.log('Tipovi podataka su:')
console.log(typeof numbernu)
console.log(typeof truetr)
console.log(typeof nullnu)
console.log(typeof falsefa)
console.log(typeof num56)


// ex 12
console.log('12 vezba')
stringg = NaN
console.log(!!stringg)

// ex 13
console.log('Logicka provera AND')

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('Logicka provera OR')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


// ex 14
console.log('Provera godista')
console.log(age<0);
console.log(age>120);

// ex 15

var speed = 100;

console.log('Driving safely ' + (speed>60 && speed<120));
