// person constructor 
function Person (name, surname) {
    this.name = name;
    this.surname = surname;
};

// all persons will share fullName and printInfo methods because they are
// provided in the prototype object of Person constructor

Person.prototype.fullName = function() {
    return this.name + ' ' + this.surname;
}
Person.prototype.printInfo = function() {
    console.log(this.fullName());
}

var pera = new Person('Pera', 'Peric');

//pera.printInfo();

// constructor Programer inheriting from Person

function Programmer(name, surname, favouriteLanguage) {
    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
}

// creating an object with prototype Person.prototype
Programmer.prototype = Object.create(Person.prototype);

// we assign the value to a constructor property of Programmer's
// prototype as we overwrote it with previous statement
Programmer.prototype.constructor = Programmer;

//console.log(Programmer.prototype)
//console.log(Person.prototype);

Programmer.prototype.printInfo = function () {
    var fullName = this.fullName();
    var fullName = Object.getPrototypeOf(Programmer.prototype).fullName.call(this);
    console.log(fullName + ' ' + this.favouriteLanguage);
}

var laza = new Programmer('Laza', 'Lazic', 'JS');
laza.printInfo();

