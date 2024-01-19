// Primitives

let age: number;
age = 21;

let userName: string;
userName = "Pedro";

let isPerson: boolean;
isPerson = true;

// Arrays
let hobbies: string[];
hobbies = ["gaming", "music"];

// Objects
let person: {
    name: string;
    age: number;
};

person = {
    name: "Pedro",
    age: 21,
};

let people: {
    name: string;
    age: number;
}[];

people = [person];

// Type inference
let course = "Angular";

// Union Types
let course2: string | number = "Angular";
course2 = 123;

// Type Aliases
type Person = {
    name: string;
    age: number;
};

let pedro: Person | Person[];

// Function & Types
function add(a: number, b: number): number | string {
    return a + b;
}

// Void functions doesn't return anything
function print(value: any): void {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]

// Class
class Student {
    //public name: string;
    //private age: number;

    constructor(public name: string, private age: number) {}

    public getName() {
        return this.name;
    }
}

const student = new Student("Pedro", 21);
student.getName();

// Interfaces
interface Human {
    name: string;
    age: number;

    greet: () => void;
}

let pedroH: Human;
pedroH = {
    name: "Pedro",
    age: 21,
    greet() {
        console.log("Greetings!");
    },
};

class Instructor implements Human {
    name: string = "Pedro";
    age: number = 21;
    greet() {
        console.log(`Greetings from ${this.name}`);
    }
}
