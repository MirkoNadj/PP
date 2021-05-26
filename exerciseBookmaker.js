'use strict';

(function () {
    console.log('Hi');

    // CONTINENT OBJECT WITH CONSTANTS, FOR COUNTRY CONSTRUCTOR //

    var continentObject = {
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    };

    // COUNTRY CONSTRUCTOR //

    function Country (name, odds, continentNameFull) {
        this.name = name;
        this.odds = odds;
        this.continent = continentNameFull;  
    }; 

    // PERSON CONSTRUCTOR //

    function Person (name, surname, dateOfBirthh) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date (dateOfBirthh);
        this.getData = function () {
            return this.name + ' ' + this.surname + ' born on: ' + this.dateOfBirth.getDate() + '.' + this.dateOfBirth.getMonth() + '.' + this.dateOfBirth.getYear() + '.';
        }
        this.getAge = function () {
            var birthdayDate = new Date(this.dateOfBirth);
            var currentDate = new Date();
            var millisecondDifference = currentDate - birthdayDate;
            var age = new Date (millisecondDifference);
            return (age.getUTCFullYear() - 1970);
        }
    };    

    // PLAYER CONSTRUCTOR //

    function Player (personObject, betAmount, countryObject) {
        this.person = personObject;
        this.betAmount = betAmount;
        this.country = countryObject;
        this.getData = function () {
            var expectedWin = this.country.odds * this.betAmount;
            return this.country.name + ', ' + expectedWin + ' eur,' + this.person.name + ' ' + this.person.surname + ', ' + this.person.getAge() + ' years';
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

    // BETTING PLACE CONSTRUCTOR //

    function BettingPlace (adress) {
        this.adress = adress;
        this.listOfPlayers = [];
        this.addPlayer = function (playerObject) {
            this.listOfPlayers.push(playerObject);
        }
        this.getData = function () {
            var sumOfAllBets = 0;
            this.listOfPlayers.forEach(function (playerElement) {
                sumOfAllBets+= playerElement.betAmount;
            })
            return this.adress.street + ', ' + this.adress.postalCode + ' ' + this.adress.city + ', sum of all bets: ' + sumOfAllBets + ' eur';
        };
    };

    // BETTING HOUSE CONSTRUCTOR //

    function BettingHouse (competitionName, numberOfPlayers) {
        this.competitionName = competitionName;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }

    // CREATE PLAYER FUNCTION //

    function createPlayer (personObject, betAmount, countryObject) {
        return playerObject = new Player(personObject, betAmount, countryObject);
    }

    // CREATE BETTING PLACE FUNCTION //

    function createBettingPlace (adressObject) {
        return bettingPlaceObject = new BettingPlace(adressObject)
    }

    // Creating a Betting House object //

    var bettingHouseObject1 = new BettingHouse('Football World Cup Winner', 4);

    // Creating four players with random data, two betting places, adding players to betting places, adding betting places to the betting house...

    var countryObject1 = new Country ('SR', 20, continentObject.EUROPE);

    var personObject1 = new Person ('marko','markovic', 'Nov 12 1982');
    var personObject2 = new Person ('pera', 'peric', 'Aug 10 1975');
    var personObject3 = new Person ('marko','markovic', 'Nov 12 1982');
    var personObject4 = new Person ('pera', 'peric', 'Aug 10 1975');

    var playerObject1 = new Player(personObject1, 100, countryObject1)
    var playerObject2 = new Player(personObject2, 200, countryObject1)
    var playerObject1 = new Player(personObject1, 100, countryObject1)
    var playerObject2 = new Player(personObject2, 200, countryObject1)

    var adressObject1 = new Adress ('SR', 'Beograd', '11000', 'Nemanjina', '104');
    var adressObject2 = new Adress ('SR', 'Novi Sad', '21000', 'Pavlova', '204');

    var bettingPlaceObject1 = new BettingPlace (adressObject1);
    var bettingPlaceObject2 = new BettingPlace (adressObject2);
    

    bettingPlaceObject1.addPlayer(playerObject1);
    bettingPlaceObject1.addPlayer(playerObject2);
    bettingPlaceObject2.addPlayer(playerObject3);
    bettingPlaceObject2.addPlayer(playerObject4);

    
})();