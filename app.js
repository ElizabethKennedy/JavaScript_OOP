console.log("Hello World! We're Down With OOP!\n==========\n");

// Exercise 1
console.log("EXERCISE 1:\n==========\n");


class Person {
    constructor(name, pet, residence, hobbies) {
        this.name = name;
        this.pet = pet;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info() {
        console.log(`Hello, friends! My name is ${this.name} and I live in ${this.residence}. 
        I have ${this.pet} pet, a dog named Dexter, and one of my hobbies is ${this.hobbies[
            Math.floor(Math.random() * (this.hobbies.length))]}.`);
    }
    greeting() {
        let input = prompt("What is your name?");
        console.log(`Hello ${input}!`);
    }
}

 

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pet, residence, hobbies) {
        super(name, pet, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting() {
        console.log("Hello Coder!");
    }
};
    

let elizabeth = new Person ('Elizabeth', 1, "Huntington Beach, California, USA", ['Writing', 
'Cosmetology', 'Coding', 'Yoga', 'Roller Skating']);






// Exercise 3
console.log("EXERCISE 3:\n==========\n");


let Elizabeth= new Person("Elizabeth", 1, "Huntington Beach, California, USA", ["Writing", 
"Cosmetology", "Coding", "Yoga", "Roller Skating"]);

let LaloSalamanco= new Coder("Lalo Salamanco", 1, "Mexico", ["Cooking", "Exotic Dancing"]);

console.log("\nPerson\n");
Elizabeth.info();
Elizabeth.greeting();

console.log("\nCoder\n");
LaloSalamanco.info();
LaloSalamanco.greeting(); 
   



console.log("EXERCISE 4:\n==========\n");

class Calculator{

    result = 0;

    add(a, b) {
        if (b === undefined) {
            this.result += a;
        } else {
            this.result = a + b;
        }
        return this.result;
    }

    subtract(a, b) {
        if (b === undefined) {
            this.result -= a;
        } else {
        this.result = a - b;
        }
        return this.result ;
    }

    multiply(a, b) {
        if (b === undefined) {
            this.result *= a;
        } else {
        this.result = a * b;
        }
        return this.result ;
    }
    divide(a, b) {
        if (b === undefined) {
            this.result /= a;
        } else {
        this.result = a / b;
        }
        return this.result ;
    }

    clear() {
        this.result = 0;
    }

    displayResult() {
        console.log (this.result);
    }
}

let calculator = new Calculator();

calculator.multiply(4, 2);
calculator.displayResult();
calculator.subtract(3);
calculator.displayResult ();
calculator.clear();
calculator.displayResult;
