'use strict';

(function () {
    console.log('Hi');

    // COUNTRY CONSTRUCTOR //

    function Country (name, odds, ) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;  
    };

    // CONTINENT OBJECT WITH CONSTANTS, FOR COUNTRY CONSTRUCTOR //

    var continent = {
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    };

    // PERSON CONSTRUCTOR //

    function Person (name, surname, dateOfBirthh) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date (dateOfBirthh);
        this.getData = function () {
            return this.name + ' ' + this.surname + ' born on: ' + this.dateOfBirth.getDate() + '.' + this.dateOfBirth.getMonth() + '.' + this.dateOfBirth.getYear() + '.';
        }
        this.Age = function () {

            return personAge;
        }
    };


    // AGE CALCULATION TRY //

    function calculateAge(birthday) {
        var birthday = new Date(birthday);
        var currentDate = new Date();
        var millisecondDifference = current - birthday
        var age = new Date (millisecondDifference);
        return (age.getUTCFullYear() - 1970);
    }
    
    console.log(calculateAge('Apr 12 2020'))

    //var personObject1 = new Person ('marko','markovic', 'Nov 12 1982');
   // console.log(personObject1.getData());

    // PLAYER CONSTRUCTOR //

    function Player (personObject, betAmount, countryObject) {
        this.person = personObject;
        this.betAmount = betAmount;
        this.country = countryObject;
        this.getData = function () {
            var expectedWin = this.country.odds * this.betAmount;
            return this.country + ', ' + expectedWin + ' eur,' + this.person.name + ' ' + this.person.surname + ', ' + this.person.age() + ' years';
        }
    };

    // ADRESS CONSTRUCTOR //

    function Adress (country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function() {
            return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
        };
    };

    var adressObject1 = new Adress ('SR', 'Beograd', '11000', 'Nemanjina', '104');
    console.log(adressObject1.getData());


    // BETTING PLACE CONSTRUCTOR //

    function BettingPlace (adress) {
        this.adress = adress;
        this.listOfPlayers = [];
    }

    // BETTING HOUSE CONSTRUCTOR //

    function BettingHouse (competition, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }






})();