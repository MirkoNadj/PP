/*Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!  */

var myCoffe = {
    name: 'Arabic',
    strength: 'Very strong',
    flavour: 'Vanila',
    milk: true,
    sugar: false,
}

/*Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */

/* Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.*/
'use strict'

function createObject(desc, progLang, gitRep, devStatus) {
    return {
    description : desc,
    programingLanguage : progLang,
    gitRepository : gitRep,
    developmentStatus : devStatus,
    printRep : function() {
        return '' + gitRepository + '';
    },
    checkIfJS : function() {
        return progLang === 'JavaScript';
    },
    checkDev : function() {
        return devStatus ? 'Project is in development' : 'Not in development';
    },
}
}

var project = createObject('prvi projekat', 'JavaScript', 'http://nesto.com', true)

console.log(project)

console.log(project.checkIfJS());
console.log(project.printRep());
console.log(project.checkDev());                  

/*Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  */ 

function Recipe (name, cuisine, compxNum, ingArr, prepTime, instr, delIng) {
    this.recipeName = name,
    this.typeOfCuisine = cuisine,
    this.complexity = compxNum,
    this.listOfIngredients = ingArr,
    this.preparationTime = prepTime,
    this.preparingInstructions = instr,
    this.printIngredients = function () {
            console.log(ingArr);
        };
    this.checkPrepTime = function () {
        return (prepTime <= 15) ? 'Meal can be prepared for 15 minutes' : 'Preparation time is more than 15 minutes' 
        };
    this.changeType = function (type) {
            return this.typeOfCuisine = type;      
        };
    this.deleteIng = function() {
        var listOfIngredients = ingArr.filter(function(element) {
            return (element !== delIng)
        })
        return listOfIngredients;
    };
}

var newRep = new Recipe ('spaghetti', 'pasta', 2, ['spaghetti pasta', 'minced meat', 'garlic', 'tommato sauce', 'spices'], 14, 'boil pasta for 10 min, minced meat on pan, put tommato sauce and spices')
console.log(newRep)

console.log(newRep.checkPrepTime())



function createRecipe(name, cuisine, compxNum, ingArr, prepTime, instr) {
    return {
        recipeName: name,
        typeOfCuisine: cuisine,
        complexity: compxNum,
        listOfIngredients: ingArr,
        preparationTime: prepTime,
        preparingInstructions: instr,
        printIngredients : function () {
            console.log(ingArr);
        },
        checkPrepTime : function () {
            return (prepTime === 15) ? 'Meal can be prepared for 15 minutes' : 'Preparation time is more than 15 minutes' 
        },
        changeType : function (type) {
            typeOfCuisine = type;             
        }
    }

}

var recipe1 = createRecipe('spaghetti', 'pasta', 2, ['spaghetti pasta', 'minced meat', 'garlic', 'tommato sauce', 'spices'], 14, 'boil pasta for 10 min, minced meat on pan, put tommato sauce and spices')



recipe1.printIngredients()
recipe1.checkPrepTime()
recipe1.changeType('cake')
console.log(recipe1)
var arr = [1,2,3,4,5,6,7];

var string = arr.indexOf(4)
console.log(string)






console.log(Object.constructor)
console.log(Function.constructor)



console.log((Math.random())
)
