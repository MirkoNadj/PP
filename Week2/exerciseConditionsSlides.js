// numbers for the following exercises from slides

var numberone = 15;
var numbertwo = 8;
var numberthree = -55;
var numberfour = 12;
var numberfive = 200;

// exercise 1

if (numberone>numbertwo) {
    console.log(numberone + ' is the larger number');
}
else {
    console.log(numbertwo + ' is the larger number');
}

// exercise 2

if (numberone%2 === 0) {
    console.log('First number is EVEN');
}
else {
    console.log('First number is ODD')
}

// exercise 3

if (numberone%3 === 0) {
    console.log(numberone + ' is divisible by 3 and 5');
}
else {
    console.log('Not divisible');
}

// exercise 4

if ((numberone + numbertwo + numberthree)<0) {
    console.log("The sign of the product of first three numbers is -");
}
else {
    console.log("The sign of the product of first three numbers is +");
}

// exercise 5

if (typeof numberone === 'number') {
    if(numberone%2 === 0) {
        console.log('The first number is ' + numberone + ' and it is divisible by 2');
    }
    else {
        console.log('X');
    }
}
else {
    console.log('Not a number');
}

// exercise 6

if (numberone>numbertwo && numberone>numberthree && numberone>numberfive) {
    console.log('The largest number is ' + numberone);
}
else if (numbertwo>numberthree && numbertwo>numberfour && numbertwo>numberfive) {
    console.log('The largest number is ' + numbertwo);
}
else if (numberthree>numberfour && numberthree>numberfive) {
    console.log('The largest number is ' + numberthree);
}
else if (numberfour>numberfive) {
    console.log('The largest number is ' + numberfour);
}
else {
    console.log('The largest number is ' + numberfive);
}

// exercise 7

if (numberone>numbertwo && numberone>numberthree) {
    if (numbertwo>numberthree) {
        console.log(numberone,numbertwo,numberthree);
    }
    else {
        console.log(numberone,numberthree,numbertwo);
    }
}
else if (numbertwo>numberone && numbertwo>numberthree) {
    if (numberone>numberthree) {
        console.log(numbertwo,numberone,numberthree);
    }
    else {
        console.log(numberone,numberthree,numbertwo);
    }
}
else {
    if (numberone>numbertwo) {
        console.log(numberthree,numberone,numbertwo);
    }
    else {
        console.log(numberthree,numbertwo,numberone);
    }
}