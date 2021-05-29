'use strict';

(function () {
    console.log('Hi');

// Product constructor //
function Product (name, price, expirationDate) {
    this.productID = ("" + Math.random()).substring(2,7);  // making a string from random number and 'extracting' first five decimal digits 
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);
    this.getInfo = function() {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(name.length-1).toUpperCase() + this.productID + ', ' + this.name + ', ' + this.price; 
    };
};

// Shopping bag constructor //

function ShoppingBag () {
    this.listOfProducts = [];
    this.addProduct = function(productObject) {
        var currentDate = new Date();
        if (productObject.expirationDate > currentDate) {
            this.listOfProducts.push(productObject);
        }
        else {
            throw Error ('Product ' + productObject.name + ' expired.');
        };
    };
    this.averagePrice = function () {
        var sumPriceOfAll = 0;
        this.listOfProducts.forEach(function (productElement) {
            sumPriceOfAll += productElement.price;
        });
        var averagePriceOfAll = (sumPriceOfAll/this.listOfProducts.length);
        return averagePriceOfAll;
    }
    this.getMostExpensive = function () {
        var mostExpensiveIndex = 0;
        for (var i = 1; i < this.listOfProducts.length; i++) {
            if (this.listOfProducts[i-1].price < this.listOfProducts[i].price) {
                mostExpensiveIndex = i;
            }
            else {
                mostExpensiveIndex = i-1;
            };
        }        
        return this.listOfProducts[mostExpensiveIndex];      // returning max element of the new array
    }
    this.calculateTotalPrice = function () {
        var totalPrice = 0;
        this.listOfProducts.forEach(function (productElement) {
            totalPrice += productElement.price;
        })
        return totalPrice;
    };
};

// Payment card constructor //

function PaymentCard (accountBalance, status, validUntil) {
    this.accountBalance = accountBalance.toFixed(2);
    if ( !['active','inactive'].includes(status) ) {
		throw new Error('Invalid status input');
	};
    this.status = status;
    this.validUntil = new Date(validUntil);
};

// Check Out And Buy function //

function checkoutAndBuy (shoppingBagObject, paymentCardObject) {
    var currentDate = new Date()
    if (paymentCardObject.status === 'active' && paymentCardObject.validUntil >= currentDate) {
        if (paymentCardObject.accountBalance >= shoppingBagObject.calculateTotalPrice()) {
            return 'Purchase succesful'
        }
        else {
            return 'You are missing ' + (shoppingBagObject.calculateTotalPrice() - paymentCardObject.accountBalance) + ' to complete the purchase.'
        };
    }
    else {
        throw new Error ('Payment card not active or expired');
    };
};

// TESTING //
try {

var productObject1 = new Product ('mleko', 100, 'Nov 12 2021');
var productObject2 = new Product ('hleb', 70, 'Aug 20 2021');
var productObject3 = new Product ('jaja', 130, 'Jun 15 2021');

//console.log(productObject1)
//console.log(productObject1.getInfo())

var shoppingBagObject1 = new ShoppingBag;

shoppingBagObject1.addProduct(productObject1);
shoppingBagObject1.addProduct(productObject2);
shoppingBagObject1.addProduct(productObject3);

console.log(shoppingBagObject1.averagePrice())
console.log(shoppingBagObject1.getMostExpensive())
console.log(shoppingBagObject1.calculateTotalPrice())

var paymentCardObject1 = new PaymentCard(1000, 'active', 'Jan 31 2022');
console.log(paymentCardObject1);

console.log(checkoutAndBuy(shoppingBagObject1, paymentCardObject1));

} catch (error) {
    console.log('Error message: ' + error.message);
}

})();
