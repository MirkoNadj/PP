/*Try to use built-in object methods to solve some of the problems here */


/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]    */

function duplicateEachEl(arr) {
    return arr.map(function (element) {
        return (element * 2);
    })
    };

var doubleArray = duplicateEachEl([2, 4, 7, 11, -2, 1]);
console.log(doubleArray)


/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]   */


var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArray = [...new Set(array)];

console.log(array);
console.log(newArray);


/* 3a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true    */

function checkOdd (arr) {
    return arr.length%2 !== 0;
}

console.log(checkOdd([1, 2, 9, 2, 1]))
 
/* 3b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4  */

function countLessThanMiddle (arr) {
    var count = 0;
    if (arr.length%2 === 0) {
        return "ERROR";
    }
    else {
        arr.map(function(element) {
            if (element < (arr[Math.floor(arr.length/2)])) {
                count++;
            }
        })                
    }
    return count;  
}

console.log(countLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]))


/* 4. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }    */

function smallestElement(arr) {
    var min = arr[0];
    arr.forEach(function(element) {
        if (element < min) {
            min = element;
        }
    })
    var pos = arr.lastIndexOf(min);
    return { minValue: min, minLastIndex: pos };
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]))


/* 5. a. Write a function that finds all the elements in a given array less than a given element. 
    Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]  */

function lessElements (arr,el) {
    return arr.filter(function(element) {
        return element < el;
    })
}
console.log(lessElements([2, 3, 8, -2, 11, 4],6));


/* 5 b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
        Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Programming’, ‘product’]   */

function allWithPro (arr,substr) {
    return arr.filter(function(element) {       
        return element.toLowerCase().startsWith(substr);
    })
}

console.log(allWithPro(['JavaScript', 'Programming', 'fun', 'product'], 'pro'));


/* 5 c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.  */

function allWithPro (arr,substr) {
    return arr.filter(function(element) {       
        return element.toLowerCase().startsWith(substr);
    })
}
function lessElements (arr,el) {
    return arr.filter(function(element) {
        return element < el;
    })
}

function filterSome (arr,elem,func) {
    return func(arr,elem);
}

console.log(filterSome(['JavaScript', 'Programming', 'fun', 'product'], 'fu', allWithPro));

console.log(filterSome([2, 3, 8, -2, 11, 4], 11, lessElements))


/* 6. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
    [
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]     */

var shopList = [
    {name: 'bread', price: 50},
    {name: 'milk', price: 100},
    {name: 'ketchup', price: 150},
    {name: 'orange', price: 170},
]

/* 7. Write a function that calculates the total price of your shopping list. */

function totalPrice (arr) {
    var total = 0;
    arr.forEach(function (element) {
        return total += element.price;        
    })  
    return total; 
}

console.log(totalPrice(shopList))

/* 11. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
/* 12. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 


/* 13. Write a function that checks if a given string is written in all capitals.
/* 14. Write a function that checks if a given string contains any digits.
/* 15. Write a function that checks if a given string is a valid hexadecimal color.
/* 16. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
/* 17. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

/* 18. Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
 
/* 19. Write a function that for a given departure and arrival time calculates the time the trip takes.
    Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds
   
  
/* 20. Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


/* 21. Write a function that calculates the distance between two points in the space. 



/* 22. Write a function that generates a random integer value between 5 and 20.
/* 23. Write a function that generates a random integer value between 50 and 100. 
/* 24. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    



/* 25. Write a function that shuffles the elements of a given array. 
        Input: [3, 6, 11, 2, 9, 1]
        Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

