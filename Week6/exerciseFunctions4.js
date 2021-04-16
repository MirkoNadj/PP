/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes    

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no     */

function checkEl(el,arr) {
    var found;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            found = 'yes';
            break;
        }
         else {
            found = 'no';
        }        
    }
    return found;
}

console.log(checkEl(3, [5, -4.2, 3, 7]));
console.log(checkEl(3, [5, -4.2, 18, 7]));


/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]  */

function mulPos(arrP) {
    for (var i = 0; i < arrP.length; i++) {
        if (arrP[i] > 0) {
            arrP[i] = arrP[i] * 2;
        }
    }
    return arrP;
}

console.log(mulPos([-3, 11, 5, 3.4, -8]));


/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3  */

function findArrMin(arrM) {
    var minEl = arrM[0];
    var indexM = 0;
    for (var i = 1; i < arrM.length; i++) {
        if (minEl > arrM[i]) {
            minEl = arrM[i];
            indexM = i;
        }
    }
    return minEl, indexM;
}
    

console.log(findArrMin([4, 2, 2, -1, 6]));


/* 4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2  */

function findArrSecMin(arrMS) {
    var minEl;
    var secMinEl = arrMS[0];
    for (var i = 1; i < arrMS.length; i++) {
        if (secMinEl > arrMS[i]) {
            minEl = arrM[i];
            indexM = i;
        }
    }
    return secMinEl;
}
    

console.log(findArrSecMin([4, 2, 2, -1, 6]));


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16   */

function sumPos(arrPos) {
    var sumPos = 0;
    for (var i = 0; i < arrPos.length; i++) {
        if (arrPos[i] > 0) {
            sumPos += arrPos[i];
        }
    }
    return sumPos;
}

console.log(sumPos([3, 11, -5, -3, 2]));

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.   */


function isArrSymm(arrS) {
    for (var i = 0; i < arrS.length; i++) {
        if (arrS[i] !== arrS[arrS.length-1-i]) {
            isSymm = false;
            return 'The array isn\'t symmetric';
        }
        else {
            return 'The array is symmetric';
        }
    }
}

console.log(isArrSymm([2, 4, -2, 7, -2, 4, 2]));
console.log(isArrSymm([3, 4, 12, 8]));


/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]    */

function intertwArr(arr1,arr2) {
    var intArr = [];
    for (var i = 0; i < arr1.length; i++) {
        intArr[intArr.length] = arr1[i];
        intArr[intArr.length] = arr2[i];
    }
    return intArr;
}

console.log(intertwArr([4, 5, 6, 2], [3, 8, 11, 9]));


/* 8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]     */

function concTwoArr(arr1,arr2) {
    for (var i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}

console.log (concTwoArr([4, 5, 6, 2], [3, 8, 11, 9]));


/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]                     */

function delFromArr(e,a) {
    var aDel = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== e) {
            aDel[aDel.length] = a[i];
        }
    }
    return aDel;
}

console.log(delFromArr(2,[4, 6, 2, 8, 2, 2]));


/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]    */

function insertElem(e,p,a) {
    var aIns = [];
    if (p < a.length) {
        for (var i = 0; i < a.length; i++) {
            if (i === p) {
                aIns[aIns.length] = e;
                aIns[aIns.length] = a[i];
            }
            else {
                aIns[aIns.length] = a[i];
            }
        }
    return aIns;    
    }
    else {    
        return 'Position error!'    
    }
}
console.log(insertElem(78,3,[2, -2, 33, 12, 5, 8]));
