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

    function BettingHouse (competitionName) {
        this.competitionName = competitionName;
        this.listOfBettingPlaces = [];
        var sumOfPlayers = 0;
        this.numberOfPlayers = function () {
            this.listOfBettingPlaces.forEach(function (bettingPlaceElement) {
            sumOfPlayers += bettingPlaceElement.listOfPlayers.length;
            })
            return sumOfPlayers;
        }        
        this.addBettingPlaces = function (bettingPlaceObject) {
            this.listOfBettingPlaces.push(bettingPlaceObject);
        };
        this.getData = function () {
            var result = this.competitionName + ', ' + this.listOfBettingPlaces.length + ' betting places, ' + this.numberOfPlayers() + '\n';            
            this.listOfBettingPlaces.forEach(function (bettingPlaceElement) {
                result += '\t' + bettingPlaceElement.getData() + '\n'
                bettingPlaceElement.listOfPlayers.forEach(function (playerElement) {
                    result += '\t\t' + playerElement.getData() + '\n'
                })        
            })       
            return result;
        };
    };

    // CREATE PLAYER FUNCTION //

    function createPlayer (personObject, betAmount, countryObject) {
        return new Player(personObject, betAmount, countryObject);
    }

    // CREATE BETTING PLACE FUNCTION //

    function createBettingPlace (adressObject) {
        return new BettingPlace(adressObject)
    }

    // Creating a Betting House object //

    var bettingHouseObject1 = new BettingHouse('Football World Cup Winner', 4);

    // Creating four players with random data, two betting places, adding players to betting places, adding betting places to the betting house...

    var countryObject1 = new Country ('SR', 0.2, continentObject.EUROPE);
    var countryObject2 = new Country ('GR', 1.1, continentObject.EUROPE);
    var countryObject3 = new Country ('CO', 2, continentObject.SOUTH_AMERICA);

    var personObject1 = new Person ('Pera','Peric', 'Nov 12 1982');
    var personObject2 = new Person ('Mitar','Miric', 'Aug 10 1975');
    var personObject3 = new Person ('Marko','Markovic', 'Sep 23 1967');
    var personObject4 = new Person ('Luke', 'Skywalker', 'Apr 10 1971');

    var playerObject1 = createPlayer(personObject1, 1000, countryObject1);
    var playerObject2 = createPlayer(personObject2, 1500, countryObject1);
    var playerObject3 = createPlayer(personObject3, 500, countryObject2);
    var playerObject4 = createPlayer(personObject4, 2500, countryObject3);

    var adressObject1 = new Adress ('SR', 'Beograd', '11000', 'Nemanjina', '104');
    var adressObject2 = new Adress ('SR', 'Novi Sad', '21000', 'Pap Pavla', '204');

    var bettingPlaceObject1 = createBettingPlace(adressObject1);
    var bettingPlaceObject2 = createBettingPlace(adressObject2);    

    bettingPlaceObject1.addPlayer(playerObject1);
    bettingPlaceObject1.addPlayer(playerObject2);
    bettingPlaceObject2.addPlayer(playerObject3);
    bettingPlaceObject2.addPlayer(playerObject4);

    bettingHouseObject1.addBettingPlaces(bettingPlaceObject1);
    bettingHouseObject1.addBettingPlaces(bettingPlaceObject2);

    console.log(bettingHouseObject1.getData());
    
})();