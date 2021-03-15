/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */
console.log('Exercise 1.\n\n');


var a = [5, -4.2, 3, 7];
var e = 3;
var countEqualEl = 0;

for (var i = 0; i < a.length; i++) {                        // loop element by element
    if (a[i] === e) {                                       // check if the given number is equal to the current element
        countEqualEl++;                                   // if it is increase the counter
    }    
}

if (countEqualEl > 0) {                                     // check counter
        console.log('Yes');
    }
    else {
        console.log('No');
    }



console.log('\n\n');
/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */
console.log('Exercise 2.\n\n');



var p = [-3, 11, 5, 3.4, -8];
var o = [];

for (var i = 0; i < p.length; i++) {                       // loop element by element  
    if (p[i] >= 0) {
        o[i] = (p[i]*2);                                   // if positive multiply and add to the new array
    }
    else {
        o[i] = p[i];                                       // if negative just add without multiplying
    }
}
console.log(o);



console.log('\n\n');
/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */
console.log('Exercise 3.\n\n');



var m = [4, 2, 2, -1, 6];
var min = m[0];                                                 // the first element is declared the minimum
var index = 0;                                                   

for (var i = 0; i < m.length; i++) {                            // first loop element by element in the array
    if (m[i] < min) {                                           // if the given element is smaller than the current minimum
        min = m[i];                                             // it becomes the new minimum
    }
}

for (var j = 0; j < m.length; j++) {                            // second loop element by element and if element is equal to minimum
    if (min === m[j]) {                                         // the index variable get's the value of current position
        index = j;
    }
}
console.log('The minimum of the array is: ' + min + ' with index: ' + index);



console.log('\n\n');
/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */
console.log('Exercise 4.\n\n');



var n = [4, 2, 2, -1, 6];
var min = n[0];                                                 // min get's the value of first element

for (var i = 0; i < n.length; i++) {                            // first loop element by element and if smaller than min, 
    if (n[i] < min) {                                           // it becomes the new min                 
        min = n[i];
    }
}

var nextMin = n[0];                                             // declaring variable for the next larger element than min  
for (var j = 0; j < n.length; j++) {                            // loop every element of array
    if (n[j] < nextMin && n[j] !== min) {                       // if the given element is smaller than 'next larger variable'
        nextMin = n[j];                                         // and it is not equal to min, it is given to the variable 
    }
}
console.log('The first element larger then the minimum (' + min + ') is: ' + nextMin);



console.log('\n\n');
/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */
console.log('Exercise 5.\n\n');


var pos = [3, 11, -5, -3, 2];
var sumPos = 0;
for (var k = 0; k < pos.length; k++) {                      // loop element by element if positive sum element, if negative do not sum
    if (pos[k] >= 0) {
        sumPos = sumPos + pos[k];
    }
}

console.log('The sum of positive elements is ' + sumPos);



console.log('\n\n');
/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */ 
console.log('Exercise 6.\n\n'); 



var leftArr = [2, 4, -2, 7, -2, 4, 2];
var rightArr = [];
var countEq = 0;                                                // used for counting the number of equal elements from two arrays

for (var i = 0; i < leftArr.length; i++) {                      // creating a new reversed array 
    rightArr[i] = leftArr[leftArr.length-1-i];                  // -1 because the lenght does not count from 0 like position
}
console.log(leftArr);
console.log(rightArr);

for (var j = 0; j < leftArr.length; j++) {                      // loop for checking if the original and reversed array are equal
    if (leftArr[j] === rightArr[j]) {
        countEq = countEq + 1;                                  // the counter increases if the elements are the same
    }
}
if (countEq === leftArr.length) {                               // check if the counter is the same as the lenght of original array
    console.log('The array is symmetric.')
}
else {
    console.log('The array isn\'t symmetric.');
}




console.log('\n\n');
/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */
console.log('Exercise 7.\n\n');



var w1 = [4, 5, 6, 2];
var w2 = [3, 8, 11, 9];
var intw = [];

for (var i = 0; i < w1.length; i++) {                    // loop for creating a new array
    intw[intw.length] = w1[i];                           // inserting an element from w1
    intw[intw.length] = w2[i];                           // inserting an element from w2
}
console.log('Intertwined array is ');
console.log(intw);



console.log('\n\n');
/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */
console.log('Exercise 8.\n\n');



c1 = [4, 5, 6, 2];
c2 = [3, 8, 11, 9];
cres = [];

for (var i = 0; i < c1.length; i++) {                    // loop for creating the first part of the new array from the c1 array
    cres[i] = c1[i]; 
}

for (var j = 0; j < c2.length; j++) {                    // loop for continuation of the new array with the c2 array
    cres[c1.length + j] = c2[j];
}
console.log('Concatenated array is: ');
console.log(cres);



console.log('\n\n');
/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */
console.log('Exercise 9.\n\n');



var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var delA = [];

for (var i = 0; i < a.length; i++) {              // loop for creating a new array without the deleted element
    if (a[i] !== e) {
        delA[delA.length] = a[i];
    }
}
console.log('Array after deletion is: ');
console.log(delA);


console.log('\n\n');
/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
console.log('Exercise 10.\n\n');



var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var b = [];

if (p < a.length) {                                     // condition for position check 
    for (var i = 0; i < a.length && i <= p; i++) {      // loop for creating a cloned array until the required position of element
        if (p === i) {
            b[i] = e;
        }
        else {
            b[i] = a[i];
        }
    }
    for (var j = 0; j < a.length - p; j++) {           // loop for continuation of cloned array after the inserted element
        b[b.length] = a[p+j];                          // b.length is the position for adding the next element from the rest of a array 
    }
    console.log('The new array is: ')
    console.log(b);
}
else {
    console.log('Position error.');
}