"use strict";
// Object-oriendted programming
// class : template
// object : instance of class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// - class imitation!

// 1. Class declarations
class Persons {
  // constructor
  constructor(name, age) {
    //fileds
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const student1 = new Persons("spencer", 20);
console.log(student1.name, student1.age);
student1.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age; // _name, same name getter, setter
  }

  set age(value) {
    // if (value < 0){
    // throw Error('age can not be negative');
    // }
    this._age = value > 0 ? value : 0;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2; // public
  #privateFiled = 0; // private
}
const experiment1 = new Experiment();
console.log(experiment1.publicField); // public
console.log(experiment1.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  // class method, not instance method
  // similar single tone?
  static printPublisher() {
    console.log(Article.publisher);
  }
}

Article.printPublisher(); 
const article1 = new Article(137);
// article1.printPublisher(); // err! TypeError : not function


// 5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        // fields
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // methods
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    // overriding
    getArea(){
        // return (this.width * this.height) / 2;
        return super.getArea() / 2
    }

    // overriding + super
    draw(){
        super.draw();
        console.log('🔺');
    }

    // Ojbect method overriding
    toString(){
        return `[Triangle] color :${this.color} `
    }

}

const rect1 =  new Rectangle(20, 20, 'blue');
const tri1 =  new Triangle(20, 20, 'red');

rect1.draw()
tri1.draw()

console.log(`rect1 Area : ${rect1.getArea()}`)
console.log(`tri1 Area : ${tri1.getArea()}`)


// 6. class checking : instanceOf
console.log(`rect1 instanceof Rectangle >>> ${rect1 instanceof Rectangle}`);
console.log(`rect1 instanceof Triangle >>> ${rect1 instanceof Triangle}`);
console.log(`rect1 instanceof Shape >>> ${rect1 instanceof Shape}`);
console.log(`rect1 instanceof Object >>> ${rect1 instanceof Object}`);

// Note! all classes inherit Interface Ojbect
console.log(rect1.toString());
console.log(tri1.toString());


// javascript MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference