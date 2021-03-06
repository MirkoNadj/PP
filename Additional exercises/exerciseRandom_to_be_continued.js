// 1. Sorting of an array from   max  to min element

var list = [3, 5, 8, -2 , -5, 6, 12, 56, -9, -1];
var tempBox;

for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
        if (list[i] < list[j]) {
            tempBox = list[i];
            list[i] = list[j];
            list[j] = tempBox;
        }
    }
}

console.log(list);



// 2. Find from which country is the given city (don't use switch!)


var city = "Dubrovnik";

var Srbija = [ "Srbija", "Nis", "Ada", "Bac", "Sid", "Senta"];
var CrnaGora = ["Crna Gora", "Bar", "Kotor", "Tivat", "Bjela", "Ulcinj", "Podgorica"];
var Hrvatska = ["Hrvatska", "Split", "Zagreb", "Dubrovnik", "Rjeka", "Vukovar"];
var country = [Srbija, CrnaGora, Hrvatska];

function find(city){
    for(var i = 0; i < (country.length); i++){
        for(var j = 0; j < country[i].length; j++){
            if(city == country[i][j]){
                return country[i][0];                
            }
        }
    }
    return "City not found";
}

console.log(find(city));

/* 3. Array of Multiples
 Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length. */


function multiples(num,length) {
    var mul = [];
    for (i = 1; i < length; i++) {
        mul[i-1] = num * i;     
    }
return mul;
}

var multi = multiples(3,5); 
console.log(multi)



/* 4.  Burglary Series (01): Calculate Total Losses
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".*/

var stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
  laptop: 100,
  pc: 120,
  lamp: 5,
}

function stolen() {
    var sum = 0;
    for ( var x in stolenItems) {
        sum += stolenItems[x];
    }
    if (sum === 0) {
        loses = "Lucky you!";
    }
    else {
        loses = sum;
    }
    return loses;
}

console.log(stolen(stolenItems));


/* Write a function that converts a Roman number into an Arabic number.

Example: arabic('CDLXXXIII') should return 483. */          

function arabic(romanNum) {    
    var errorCheck = true;                                      // checking if the Roman numeral is correctly written
    for (var c = 0; c < romanNum.length; c++) {
        if (romanNum[c] === romanNum[c+1] && romanNum[c] === romanNum[c+2] && romanNum[c] === romanNum[c+3]) {
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
            case 'I':
                rStr[k] = 1;
            default:
                'Not A Roman Numeral! Try again.'
                break;
        }
    }                                                           // end of switch, begin looping thru every array element 
    var i = 0;                                                      
    var addR = 0;
    var addF = 0;
    while (i < rStr.length) {
        if (rStr[i] === rStr[i+1] && rStr[i] === rStr[i+2]) {   // check if 3 consecutive elements are equal
            addR = rStr[i] * 3;
            if (addR < rStr[i+3]) {                            // check if they are smaller or bigger than the next element
                addR = rStr[i+3] - addR;                       // subtract and increase position
                i = i + 4;
            } 
            else {
                i = i + 3;                                     // or just increase position
            }
        }
        else if (rStr[i] === rStr[i+1]) {                      // check if 2 consecutive elements are equal
            addR = rStr[i] * 2;
            if (addR < rStr[i+2]) {                            // check if they are smaller or bigger than the next element
                addR = rStr[i+2] - addR;                       // subtract and increase position 
                i = i + 3;
            }
            else {
                i = i + 2;                                     // or just increase position
            } 
        }
        else if (rStr[i] < rStr[i+1]) {                        // if consecutive elements are not equal check which one is bigger
            addR = rStr[i+1] - rStr[i];
            i = i + 2; 
        }
        else {
            addR = rStr[i];
            i++
        }
        addF += addR;                                          // sum up individual values from each loop into final value
    }
    return addF;
}
else {
    return 'Not A Roman Numeral! Try again.';
}  
}

console.log(arabic('MCDLXXXIII'));









/* 6. Write a function roman that converts an Arabic number (up to 1000) into a Roman numeral.

Example: roman(483) should return 'CDLXXXIII'.  */


