'use strict';

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.speak = function (message) {
  window.alert(message);
};

Person.prototype.sayHello = function () {
  this.speak('Hello, my name is ' + this.firstName + ' ' + this.lastName);
};


// Use the "Person" class.
var rusty = new Person('Rusty', 'Green');
rusty.sayHello();