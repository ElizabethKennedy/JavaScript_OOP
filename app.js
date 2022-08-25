console.log("We're Down With OOP!\n==========\n");

// Exercise 1
console.log("EXERCISE 1:\n==========\n");


class Person {
    constructor(name = "Nameless", pets = 0, residence = "None", hobbies = []) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby (hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby (oldHobby) {
        this.hobbies = this.hobbies.filter ((hobby) => hobby != oldHobby
        );
    }

    greet () {
        console.log(`Hello fellow human!`);
    }
// Exercise 2
    greetByName (name) {
        console.log(`Hello, ${name}!`)
    }
}
let Elizabeth= new Person ('Elizabeth', 1, "21291", ['creative writing', 'roller skating']);


Elizabeth.removeHobby ('creative writing');
Elizabeth.addHobby ('roller skating');
Elizabeth.greet ();
// Elizabeth.greetByName (Kennedy);
console.log (Elizabeth);

console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor ( name, pets, residence, hobbies) {
        super (name, pets, residence, hobbies)
        this.occupation = "Full Stack Web Developer"
    }
    greet (name1) {
        console.log (`Hello ${name1} fellow coder`);

    }
}

let LaloSalamanco = new Coder ("Lalo Salamanco", 2, "home 2", ["cooking", "dancing"]);
LaloSalamanco.greet (Elizabeth.name);
Elizabeth.greetByName (LaloSalamanco.name);



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
