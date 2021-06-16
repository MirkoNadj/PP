/*Employees and Managers

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department

All developers should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees should inherit methods:
getData which returns the name, surname and salary 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% */

// Person, Employee, Developer constructors

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
};

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
};

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
};

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// methods for Developer constructor

Developer.prototype.getSpecialization = function () {
    return this.specialization;
};

// methods for Manager constructor

Manager.prototype.getDepartment = function () {
    return this.department;
};

Manager.prototype.changeDeparment = function (newDepartment) {
    this.department = newDepartment;
};

// methods for Employee

Employee.prototype.getData = function () {
    return this.name + ' ' + this.surname + ' ' + this.salary;
};
Employee.prototype.getSalary = function () {
    return this.salary;
};
Employee.prototype.increaseSalary = function () {
    this.salary = this.salary * 1,1;
};

// creating employee objects

var employeeMirko = new Employee('Mirko', 'Nadj', 'JS programmer', 900)

console.log(employeeMirko);

// creating developer objects

var developerSlavko = new Developer('Slavko', 'Kish', 'Java programer', 950, 'database');

console.log(developerSlavko);

// creating manager objects

var managerMarko = new Manager('Marko', 'Kraljevic', 'Manager', 1500, 'backend department');

console.log(managerMarko);

