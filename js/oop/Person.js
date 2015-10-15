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


function Student(firstName, lastName, studentId){
  this.firstName = firstName;
  this.lastName = lastName;
  this.studentId = studentId;
}

Student.prototype = new Person();

Student.prototype.signIntoClass = function () {
};


var student = new Student('rusty', 'green', 12342);
student.sayHello();



// Use the "Person" class.
//var rusty = new Person('Rusty', 'Green');
//rusty.sayHello();

// Difference between:
//Person.sayHello and Person.prototype.sayHello