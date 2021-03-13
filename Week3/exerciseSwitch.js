/* 1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 2;

switch (day) {
    case 1:
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');
        break;
    case 4:
        console.log('Cetvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break;
    case 7:
        console.log('Nedelja');
        break;
}

/* 2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

var day = 12;

switch (day) {
    case 1:
        console.log("It's weekday");
        break;
    case 2:
        console.log("It's weekday");
    case 3:
        console.log("It's weekday");
        break;
    case 4:
        console.log("It's weekday");
        break;
    case 5:
        console.log("It's weekday");
        break;
    case 6:
        console.log("It's weekend");
        break;
    case 7:
        console.log("It's weekend");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}

/* 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

var day = 15;

switch (day) {
    case 1:
        console.log("It's weekday");
        break;
    case 2:
        console.log("It's weekday");
    case 3:
        console.log("It's weekday");
        break;
    case 4:
        console.log("It's weekday");
        break;
    case 5:
        console.log("It's weekday");
        break;
    case 6:
        console.log("It's weekend");
        break;
    case 7:
        console.log("It's weekend");
        break;
    case 12:
        console.log("Input must be a number between 1 and 7");
        break;
    default:
        console.log("Not a day");
        break;
}

/* 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 2;

switch (month) {
    case 1:
        console.log("It's January");
        break;
    case 2:
        console.log("It's February");
        break;
    case 3:
        console.log("It's March");
        break;
    case 4:
        console.log("It's April");
        break;
    case 5:
        console.log("It's May");
    case 6:
        console.log("It's June");
        break;
    case 7:
        console.log("It's July");
        break;
    case 8:
        console.log("It's August");
        break;
    case 9:
        console.log("It's September");
        break;
    case 10:
        console.log("It's October");
        break;
    case 11:
        console.log("It's November");
        break;
    case 12:
        console.log("It's December");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
        break;
}

/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

var month = 15;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("It's Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("It's Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("It's Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("It's Autumn");
        break;    
    default:
        console.log("Input must be a number between 1 and 12");
        break;
};

/* 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */

var grade = 'U';

switch (grade) {
    case 'A':
        console.log("Good job.");
        break;
    case 'B':
        console.log("Pretty good.");
    case 'C':
        console.log("Passed.");
        break;
    case 'D':
        console.log("Not so good");
        break;
    case 'F':
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
        break;
};

/* 7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */

var city = 'Bar';

switch (city) {
    case 'Novi Sad':
    case 'Beograd':
    case 'Nis':
    case 'Vranje':
        console.log("Grad je u Srbiji");
        break;
    case 'London':
    case 'Manchester':
    case 'Liverpool':
        console.log("Grad je u Engleskoj");
        break;
    case 'New York':
    case 'Washington':
    case 'Los Angeles':
        console.log("Grad je u SAD");
        break;
    case 'Budva':
    case 'Bar':
    case 'Podgorica':
        console.log("Grad je u Crnoj Gori");
        break;  
    case 'Zagreb':
    case 'Rijeka':
        console.log("Grad je u Hrvatskoj");
        break; 
    default:
        console.log("Please choose a different city");
        break;
};

/* 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var a = 20;
var b = 10;
var operation = '/';

if (a === 0 || b === 0) {
    console.log ('non divisible');
}
else {
switch (operation) {
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    default:
        console.log('Input number and operation')
}
}


