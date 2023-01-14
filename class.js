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
    constructor(name, age) {
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
    constructor(firstName, lastName, age) {
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

const user1 = new User('kayden', 'kim', '31');
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// class를 이용하여 새로운 object를 만들면 새로운값들을 이용하여 새로운 object를 복제하지만
// static을 사용하면 새로운 object가 아닌 class의 직접 연결되어 적용됨 그래서 부를때도
// 새로운 object이름이 아닌 Article (class이름)으로 부른것

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { } // 기존 class를 가져와 새로운 rectangle class를 만듬, triangle처럼 수정도 가능 = overwriting
class Triangle extends Shape {
    draw() {
        super.draw(); //super
        console.log('🔺'); // 새로 정의한 함수만 작동됨 = 기존 class의 함수도 작동시키고 싶으면 super를 씀
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
//이렇게 하면 공통적으로 적용되는 부분만 수정하면 새로 만들어진 모든 class에도 동시적용가능 (유지보수 탁월)


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle);  //f
console.log(triangle instanceof Triangle);   //t
console.log(triangle instanceof Shape);      //t
console.log(triangle instanceof Object);     //t -> javascript에서 만든 모든 class는 javascript의 object를 상속한것 
console.log(triangle.toString()); // 그래서 상위(javascript의 object들도 사용가능)


// avaScript Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference