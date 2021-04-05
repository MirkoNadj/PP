/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

function vowelCount(str) {
    var countV = 0;
    for (var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a' :
            case 'e' :
            case 'i' :
            case 'o' :
            case 'u' :
            case 'A' :
            case 'E' :
            case 'I' :
            case 'O' :
            case 'U' :
                countV++;
                break;
        }
    }
    return countV;
}

console.log(vowelCount('Write a fUnction that cOmbines'));

   

/* 2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

function alternate(arr1,arr2) {
    var altArr = [];
    for(var i = 0; i < arr1.length; i++) {
        altArr[altArr.length] = arr1[i];
        altArr[altArr.length] = arr2[i];
    }
    return altArr;
}

console.log(alternate(['a','b','c'],[1,2,3]));



/* 3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]   */

function rotateNum(arr,k) {
    var rotArr = [], r = k, t = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - k) {
            rotArr[i] = arr[r];
            r++;
        }
        else {
            rotArr[i] = arr[t];
            t++;
        }
    }
    return rotArr;
}

console.log(rotateNum([1,2,3,4,5,6],2));
 

/* 4. Write a function that takes a number and returns array of its digits. */

function numberToArr(num) {
    var strNum = num + '';
    var arrNum;
    for (var i = 0; i < strNum.length; i++) {
        arrNum[i] = strNum[i];
    }
    return arrNum;
}

console.log(numberToArr(123456));


/* 5. Write a program that prints a multiplication table for numbers up to 12. */

function multitable(n) {
    var res = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            res += i*j + ' ';
        }
    res += '\n';
    }
    return res
}

console.log (multitable(15));

/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function celsToFahr(c) {
    return c + ' deegres Celsius is ' + ((c * 9/5) + 32) + ' deegres Fahrenheit';
}

console.log(celsToFahr(25));


/* 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function maxEl(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxEl([1, 2, 153, false, '2', null, NaN, 7, 0, 11, 9, ]));


/* 8. Write a function to find the maximum and minimum elements. Function returns an array. */

function findMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return 'Max element is ' + max + ' and the minimum element is ' + min;
 }

 console.log(findMaxMin([11,26,3,4,5,6,7,8, -6, 0, 71]));

/* 9. Write a function to find the median element of array.
    *Median
    Arrange your numbers in numerical order.
    Count how many numbers you have.
    If you have an odd number, divide by 2 and round up to get the position of the median number.
    If you have an even number, divide by 2. Go to the number in that position and average it with the number in the next higher position to get the median. */

function findMedian(arr) {
    var newArr = [], median;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                newArr[i] = arr[j];
            }
            else {
                newArr[i] = arr[i];
            }
        }
    }
    if (newArr.length%2 === 0) {
        median = (newArr[newArr.length/2 - 1] + newArr[newArr.length/2])/2;
    }
    else {
        median = newArr[parseInt(newArr.length/2 + '')];
    }
    return median;
}

console.log (findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));


/* 10. Write a function to find the element that occurs most frequently. */


function mostFreq(arr) {
    for (var i = 0; i < arr.length; i++) {
        var countF = 0, countP = 0, mostF;
        for (var j = i; j < arr.length - i; j++) {
            arr[j] === arr[i] ? countF++ : countF;     
        }
        countF > countP ? mostF = arr[i] : countF;
    }            
    return mostF;
} 

console.log(mostFreq([1,2,3,1,1,2,2,2,2,3,1,2,1,1,1,1,3,4,5,1,3]));


/* 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. */


function firstAndLast(arr) {
    if (arr.length !== 0) {
        switch (arr.length%2 === 0) {
            case true:
                return 'First element is ' + arr[0] + ' and the last element is ' + arr[arr.length-1];
            case false:
                return 'First element is ' + arr[0] + ' the middle one is ' + arr[parseInt(arr.length/2+'')] + ' and the last element is ' + arr[arr.length-1];
        }
    }
    else {
        return 'Please input array'
    }
}

console.log(firstAndLast([]));


/* 12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters. */

function averageN(arr) {
    var i = 0, sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return 'The average is ' + sum/arr.length
}

console.log(averageN([1,2,3,4,5,6]));


/* 13. Write a function to find all the numbers greater than the average. */

function greaterThanAverage(arr) {
    var i = 0, j = 0; sum = 0; greatNum = [];
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    while (j < arr.length) {
        if (arr[j] > sum/arr.length) {
            greatNum[greatNum.length] = arr[j];
        }
        j++;
    }
    return 'Numbers greater than the average are ' + greatNum;
}

console.log(greaterThanAverage([1,2,13,3,4,5,6,7,8,9]));

/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40   */

function bmiIndex(weight,height) {
    bmi = weight/(height*height);
    if (bmi < 15) {
        return 'Starvation';
    }
    else if (bmi < 17.5) {
        return 'Anorexic';
    }
    else if (bmi < 18.5) {
        return 'Underweight';
    }
    else if (bmi >= 18.5 && bmi < 25) {
        return 'Ideal';
    }
    else if (bmi >= 25 && bmi < 30) {
        return 'Overwheight';
    }
    else if (bmi >= 30 && bmi < 40) {
        return 'Obesse';
    }
    else if (bmi >= 40) {
        return 'Morbidly obese';
    }
    else {
        return 'Error'
    }
}

console.log(bmiIndex(72,1.7));



/* 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function printInFrame(arr) {
    var maxStr = arr[0], row = '', frame = '', space = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > maxStr) {
            maxStr = arr[i];
        }
    }
    for (var r = 0; r < arr.length + 1; r++) {
        if (r === 0 || r === arr.length) {
            for (var k = 0; k < maxStr.length + 4; k++) {
                row += '*';
            }
        }
        else {
            for (var z = 0; z < maxStr.length-arr[r].length; z++) {
                space += ' ';
            }            
            row += '* ' + arr[r] + space + ' *';
            space = '';
        }
        frame += row + '\n';
        row = '';
    }
    return frame;
}

console.log(printInFrame(["Hello", "World", "in", "a", "frame"]));