    /* ===== Converting Roman to Arabic Number ====== */

    function myFunction() {
        var x = document.getElementsByClassName("envelope");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].className('envelope2');
        }
      }
      myFunction();

    

    var x = document.getElementsByClassName("envelope");


document.getElementsByClassName('envelope').className('envelope2');


    function romanToArabic(romanNum) {
        var romanNum = (document.getElementById("roman").value);    
        var errorCheck = true;                                      // checking if the Roman numeral is correctly written
        for (var c = 0; c < romanNum.length; c++) {
            if (romanNum[c] === romanNum[c+1] && romanNum[c] === romanNum[c+2] && romanNum[c] === romanNum[c+3]) {
                errorCheck = false;
                break;
            }
            else if (romanNum[c] !== 'M' && romanNum[c] !== 'D' && romanNum[c] !== 'C' && romanNum[c] !== 'L' && romanNum[c] !== 'X' && romanNum[c] !== 'V' && romanNum[c] !== 'I') {
                errorCheck = false;
                break;
            }
            else if (romanNum[c] === 'D' && romanNum[c+1] === 'D' || romanNum[c] === 'L' && romanNum[c+1] === 'L' || romanNum[c] === 'V' && romanNum[c+1] === 'V') {
                errorCheck = false;
                break;
            }
            else if (romanNum[c] === 'I' && romanNum[c+1] !== 'V' || romanNum[c] === 'I' && romanNum[c+1] === 'X' || romanNum[c] === 'X' && romanNum[c+1] !== 'L' || romanNum[c] === 'X' && romanNum[c+1] !== 'C' || romanNum[c] === 'C' && romanNum[c+1] !== 'D' || romanNum[c] === 'C' && romanNum[c+1] !== 'M' ) {
                errorCheck = false;
                break;
            }
        }
        if (errorCheck === true) {                          // if the Roman numeral is correct convert every single element
        var rStr = [];                                      // to corresponding arabic value and put them in an array
        for (var k = 0; k < romanNum.length; k++) {
            switch (romanNum[k]) {
                case 'M':
                    rStr[k] = 1000; 
                    break;
                case 'D':
                    rStr[k] = 500;                
                    break;
                case 'C':
                    rStr[k] = 100;
                    break;
                case 'L':
                    rStr[k] = 50;
                    break;
                case 'X':
                    rStr[k] = 10;                
                    break;
                case 'V':
                    rStr[k] = 5;
                    break;
                case 'I':
                    rStr[k] = 1;
                default:
                    'Not A Roman Numeral!'
                    break;
            }
        }                                                           // end of switch, begin looping thru every array element 
        var i = 0;                                                      
        var addR = 0;
        var addF = 0;
        var errorCheck2 = true;
        while (i < rStr.length) {
            if (rStr[i] === rStr[i+1] && rStr[i] === rStr[i+2]) {   // check if 3 consecutive elements are equal
                addR = rStr[i] * 3;
                if (addR < rStr[i+3]) {                            // check if they are smaller or bigger than the next element
                    //addR = rStr[i+3] - addR;                       // subtract and increase position
                    //i = i + 4;
                    errorCheck2 = false;
                    break;
                } 
                else {
                    i = i + 3;                                     // or just increase position
                }
            }
            else if (rStr[i] === rStr[i+1]) {                      // check if 2 consecutive elements are equal
                addR = rStr[i] * 2;
                if (addR < rStr[i+2]) {                            // check if they are smaller or bigger than the next element
                    //addR = rStr[i+2] - addR;                       // subtract and increase position 
                    //i = i + 3;
                    errorCheck2 = false;
                    break;
                }
                else {
                    i = i + 2;                                     // or just increase position
                } 
            }
            else if ((rStr[i] < rStr[i+1])) {                        // if consecutive elements are not equal check which one is bigger
                addR = rStr[i+1] - rStr[i];
                i = i + 2; 
            }
            else {
                addR = rStr[i];
                i++
            }
            addF += addR;                                          // sum up individual values from each loop into final value
        }
        if (errorCheck2 === true) {
        document.getElementById("arabic").value = addF;
        }
        else {
            document.getElementById("arabic").value = 'Not A Roman Num!';   
        }
    }
    else {
        document.getElementById("arabic").value = 'Not A Roman Num!';
    }
    }
    
    /* ===== Converting Arabic to Roman Number ====== */
    
    var tableOfNumbers = [  ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                            ['','X','XX','XXX','XL','L','LX','LXX','LXXX', 'XC'],
                            ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],                        
                            ['','M','MM','MMM']
                         ];
    
    function arabicToRoman (arabicNum) {
        var arabicNum = (document.getElementById("arabic").value);
        var isArabicCheck = true;
        if (typeof arabicNum !== 'number' && arabicNum % 1 !== 0 || arabicNum > 3999) {
            isArabicCheck = false;
        }
    
    // function for turning a number into reversed string
        function numberToReverseString (num) {
        num += '';
        var revString = '';
        for (var r = 0; r < num.length; r++) {        
            revString += num[num.length-r-1]; 
        }
        return revString;
        }
    // end of function
    
        if (isArabicCheck) {
            arabicNum = numberToReverseString(arabicNum);
            var newRomanNum = '';
            for (var a = arabicNum.length -1 ; a >= 0  ; a--) {
                newRomanNum += tableOfNumbers[a][arabicNum[a]];            // concatinating element from array of corresponding numbers
            }
        }
        else {
            newRomanNum = 'Not a valid number!'
        }
        document.getElementById("roman").value = newRomanNum;
    }
    
    // function for reseting input
    function reset() {
        document.getElementById("roman").value = "";
        document.getElementById("arabic").value = "";
    }