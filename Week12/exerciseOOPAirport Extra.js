'use strict';

(function () {
    console.log('Hi!\n');

// ****Constructor functions**** //

// Person constructor //

function Person (name, surname) {
    if (!name || !surname) {
        throw new Error('Name and surname fields required');
    }
    this.name = name,
    this.surname = surname;
    this.getData = function () {
        return this.name + ' ' + this.surname;
    }
};
// Seat constructor //

function Seat (number, category) {
    // if category not defined
    this.category = category || 'e';
    this.number = number || Math.floor(10 + 91 * Math.random());
    /*if (!['e','b'].includes(category)) {
        throw new Error('Invalid category input');
    }   */ 
    this.getData = function () {
        return this.number +', ' + this.category.toUpperCase(); 
    }
};
// Passenger constructor //

function Passenger (personObject, seatObject) {
    if (!personObject || !(personObject instanceof Person)) {
        throw new Error('Invalid person input');
    }
    if (!seatObject || !(seatObject instanceof Seat)) {
        throw new Error ('Invalid seat input');
    }
    this.person = personObject.getData();
    this.seat = seatObject.getData();
    this.getData = function () {
        if (this.seat.category === 'e') {
            seat = 'economy'
        }
        else if ( this.seat.category === 'b') {
            seat = 'bussines'
        }
        return '\t\t\t\t' + this.seat + ', ' + this.person;
    };
}
// Flight constructor //

function Flight (relation, date) {
    if (!relation || ! date) {
        throw new Error('Relation and date input required');
    } 
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function (passengerObject) {
        if (this.listOfPassengers.length === 100) {
            throw Error ('Flight is full')
        }    
        this.listOfPassengers.forEach(function (passengerElement) {
            if (passengerObject.seat.number === passengerElement.seat.number) {
                throw Error ('Seat already taken');
            }            
            else if (passengerElement.person.name === passengerObject.person.name && passengerElement.person.surname === passengerObject.person.surname ) {
                throw Error ('Passenger already on list');
            }
            return this.listOfPassengers.push(passengerObject);
        })        
    };
    this.getData = function () { 
        var flightString = '';
        this.listOfPassengers.forEach (function(passengerElement) {
            flightString += '\n' + passengerElement.getData();
        });
        return this.date + ',\n\t\t' + this.relation + flightString;
    };
}
// Airport constructor //

function Airport () {    
    this.name = 'Nikola Tesla';  // hard coded
    this.listOfFlights = [];
    this.addFlight = function (flightObject) {
        return this.listOfFlights.push(flightObject);
    };
    this.getData = function () {
        var totalPassengers = 0;
        var flightData = '';
        this.listOfFlights.forEach(function(flightElement) {
            totalPassengers += flightElement.listOfPassengers.length;
            flightData += '\n' + flightElement.getData() + '\n';
        });
        return 'Airport: ' + this.name + ', total passengers: ' + totalPassengers + '\n' + flightData; 
    };
};

// CREATE FLIGHT FUNCTION //

function createFlight (relation, date) {
    var flightObject = new Flight (relation, date);
    return flightObject;
};
 // CREATE PASSENGER FUNCTION //

function createPassenger (firstName, lastName, seatNumber, category) {
    var personObject = new Person (firstName, lastName);
    var seatObject = new Seat (seatNumber, category);
    var passengerObject = new Passenger (personObject, seatObject);
    return passengerObject;
};

// CREATING AN INSTANCE OF AIRPORT OBJECT //

var airportObject1 = new Airport();


// CREATING TWO INSTANCES OF THE FLIGHT OBJECT USING CREATEFLIGHT FUNCTION //

var flightObject1 = createFlight ('Belgrade - New York', 'Oct 25 2017');
var flightObject2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

// CREATING FOUR INSTANCES OF THE PASSENGER OBJECT USING CREATEPASSENGER FUNCTION //

var passengerObject1 = createPassenger ('John', 'Snow', 1, 'b');
var passengerObject2 = createPassenger ('Cersei', 'Lannister', 2, 'b');
var passengerObject3 = createPassenger ('Daenerys', 'Targaryen', 14);
var passengerObject4 = createPassenger ('Tyrion', 'Lannister', 1);

//console.log(passengerObject1);

// ADDING FIRST TWO PASSENGER TO THE FIRST FLIGHT //

flightObject1.addPassenger(passengerObject1);
flightObject1.addPassenger(passengerObject2);

console.log(flightObject1.getData());

// ADDING LAST TWO PASSENGER TO THE SECOND FLIGHT //

flightObject2.addPassenger(passengerObject3);
flightObject2.addPassenger(passengerObject4);

// ADDING FLIGHT INSTANCES TO THE AIRPORT //

airportObject1.addFlight(flightObject1);
airportObject1.addFlight(flightObject2);

console.log(airportObject1.getData());




// END OF IMMEDIATELY INVOKING ANONYMOUS FUNCTION
})();



console.log(Math.random() * 10);