'use strict';

(function () {
    console.log('Hi');

// Product constructor //

function Product (name, price, expirationDate) {
    this.productID = Math.round((Math.random() * 100000));  // not perfect
    this.name = name;
    this.price = price;
    this.expirationDate = expirationDate;
    this.getInfo = function() {
        return this.name.charAt[0] + this.name.charAt[name.length-1] + this.productID + ', ' + this.name + this.price; 
    };
};

// Shopping bag constructor //

function ShoppingBag () {
    this.listOfProducts = [];
    this.addProduct = function(productObject) {
        if (productObject.expirationDate <= Date.now) {
            this.listOfProducts.push(productObject);
        }
        else {
            throw Error ('Product expired')
        };
    };
    this.averagePrice = function () {
        var sumPriceOfAll = 0;
        this.listOfProducts.forEach(function (productElement) {
            sumPriceOfAll += productElement.price;
        });
        var averagePriceOfAll = (sumPriceOfAll/this.listOfProducts.length).toFixed(3);
        return averagePriceOfAll;
    }
};

var productObject = new Product ('mleko', 100, 'Nov 12 2021');
console.log(productObject)

var shoppingBagObject = new ShoppingBag;

console.log(ShoppingBagObject)

shoppingBagObject.addProduct(productObject);
console.log(shoppingBagObject.averagePrice())


})();
