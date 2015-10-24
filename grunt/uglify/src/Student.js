function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.speak = function (message) {
  alert(message);
};

Student.prototype.sayHello = function () {
  this.speak('Hello, my name is ' + this.firstName + ' ' + this.lastName);
};





// Use the "Person" class.
var rusty = new Student('Rusty', 'Green');
rusty.sayHello();