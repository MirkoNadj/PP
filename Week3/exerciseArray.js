/*1. Write an array of months in a year. Using console.log display June, October and January
from the array.*/

var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Avgust', 'September', 'October', 'November', 'Decembar'];

console.log(year[5],year[9],year[0]);


/*2. Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(week[6]);

/*3. Print all negative elements from the array [2, -4, 5, -2, -11].*/

var negative = [2, -4, 5, -2, -11];

console.log(negative[1], negative[3], negative[4]);

/*4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].*/

var div = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(div[1], div[4], div[5], div[6], div[7]);


/*5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.*/

var index = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];

console.log(index[2]);
console.log(index[2][1]);

/* pitanje 'true' ????
var a = [1, 2, 3];
console.log(a);
delete a[1];

console.log(a);

a[1] = 'new';

console.log(a);
*/