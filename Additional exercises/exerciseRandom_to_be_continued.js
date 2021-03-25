// 1. Sorting of an array

var list = [3, 5, 8, -2 , -5, 6, 12, 56, -9, -1];
var box;
for (var i = 0; i < list.length-1; i++) {
    for (var j = i + 1; j < list.length; j++) {
        if (list[i] < list[j]) {
            box = list[i];
            list[i] = list[j];
            list[j] = box;
        }
    }
}

console.log(list);


// 2. Find from which country


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

