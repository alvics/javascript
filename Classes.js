// Classes (making a blueprint)

// use Pascal case
class Person {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log('run');
    }
}

const person = new Person('Allen');

// Inheritance
// extends adds the Person class construtor and methods to Teacher (name property and run method)
class Teacher extends Person {
    constructor(name, degree) { // when adding a custom constructor to child class
        super(name) // need to add the parent class constructor with super(name)

        this.degree = degree;
    }

    console.log('tech');
};

const teacher = new Teacher('Allen', 'MSC');

// when ever adding a constructor to a child class, must add the super() with the parent class constructor property

// super() -> referances the parent class constructor (inializing the property)