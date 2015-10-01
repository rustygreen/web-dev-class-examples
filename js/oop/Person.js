function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.speak = function (message) {
  alert(message);
};

Person.prototype.sayHello = function () {
  this.speak('Hello, my name is ' + this.firstName + ' ' + this.lastName);
};





// Use the "Person" class.
//var rusty = new Person('Rusty', 'Green');
//rusty.sayHello();

// Difference between:
//Person.sayHello and Person.prototype.sayHello