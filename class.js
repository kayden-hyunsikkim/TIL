'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declartions
// class = templete
class Person {
    //constructor 생성자
    constructor(name,age) {
        //fields
        this.name = name;
        this.age = age;
    }


    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// new object
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();



// 2. Getter and setters
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //  throw Error('age can not be negative')    
        //}
        this._age = value < 0 ? 0 : value; 
    }

}

const user1 = new User ('kayden','kim','31');
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);