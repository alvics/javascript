// var -> function scope
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}

sayHello();

// let/const => block scope
function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
sayHello()

// use 'let' if re-asigning it's value 
let x = 1;

x = b; // is valid!

// 'const' varible can not be re-asigned
const x = 1;
x = b; // err -> can not re-asign

// use const over let for variables if not re-asigning values