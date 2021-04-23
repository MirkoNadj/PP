/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true

Input: “1bser9re”
Output: false     */

var checkIfContains = (function(string) {
    for (var i = 0; i < string.length; i++) {
        if (parseInt(string[i]) === 5) {
            return console.log('true')
        }
    }
    return console.log('false')
})('1b89abd');


/* 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”  */

'use strict'
var replaceAllJs = (function (string) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'J' && string[i+1] === 'S') {
          newString += '**';
          i++;
        }
        else {
          newString += string[i]
        }
    }
    return console.log(newString);
})('Programming in JS is super interesting!')

/* 3.Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning”  */

'use strict'
var insertChar = (function (string, insertPosition, insertChar) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (i === insertPosition - 1) {
          newString += insertChar;
          newString += string[i];
        }
        else {
          newString += string[i];
        }
    }
    return console.log(newString);
})('Goo morning', 4, 'd');


/* 4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”  */

'use strict'
var deleteChar = (function (string, delPos) {
  var newString = '';
  for (var i = 0; i <string.length; i++) {
    if (i === delPos + 1) {
      newString += string[i+1];
      i++;
    }
    else {
      newString += string[i];
    }
  }
  return console.log(newString);
}

)('Goodd morning!', 3);
 
/* 5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]   */

'use strict'
var deleteEverySec = (function (array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[newArray.length] = array[i];
    i++;
  }
  return console.log(newArray);
})([3, 5, 1, 8, 90, -4, 23, 1, 67])


/* 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]   */

'use strict'
var replaceDoubled = (function (array,pos1,pos2) {
  for (var i = 0; i < array.length; i++) {
    if (i >= pos1 && i <= pos2) {
      array[i] = array[i] * 2;
    }
  }
  return console.log(array);
})([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6)


/* 7. Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true     

Input: {x: 20, y: 30}, “z”, 20 
Output: false 

Input: {x: 20, y: 30}, “x”, 10 
Output: false                      */

'use strict'



/* 8. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true     */

'use strict'
var checkIfContained = (function (arrayFirst, arraySecond) {
  var foundCounter = 0;
  for (var i = 0; i < arrayFirst.length; i++) {
    for (var j = 0; j <arraySecond.length; j++) {
      if (arrayFirst[i] === arraySecond[j]) {
        foundCounter++;
        break;
      }
    }
  }
  if (foundCounter === arrayFirst.length) {
    return console.log('true');
  }
  else {
    return console.log('false')
    }
})([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3])  


/* 9. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]  */

/*'use strict'

var howManyAInString = (function (string) {
    var countA = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
          countA++;
        }
    }
    return countA;
});

var sortByAppearances = (function (arrayOfStrings) {
  var tempString;
  for (var i = 0; i < arrayOfStrings.length; i++) {
    for (var j = i + 1; j < arrayOfStrings - i; j++) {
      if (howManyAInString(arrayOfStrings[i]) > howManyAInString(arrayOfStrings[j])) {
        tempString = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j] = tempString;
      }
    }
  }
  return arrayOfStrings;
})(['apple', 'tea',  'amazing', 'morning', 'JavaScript']);

console.log(sortByAppearances)*/




/* 10. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018.   */

/* 11. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018.       */


/* 12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
      111  
            4
                      4321           */
