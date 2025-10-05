//Exercice 1
console.log("Hello, TypeScript!");



//Exercice 2
let nom: string = "Alice";
let age: number = 25;
let isAdmin: boolean = true;

let scores: number[] = [1,2,3,4,5];
let student1: [string, number] = ["Ghazi", 20];

enum Role {User, Admin, SuperAdmin};



//Exercice 3
let id: number | string;
export type A ={
    name: string;
    age: number;
}

export type B = {
    isStudent: boolean;
}

export type C = A & B;


export type Status = "pending" | "done" | "canceled";
let testStatus: Status = "pending";

let unknownValue: unknown = "Hello, TypeScript!";
if (typeof unknownValue === "string") {
    let length = (unknownValue as string).length;
} else {
    console.log("unknownValue n'est pas une chaîne");
}



//Exercice 4
interface User {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: false
};

interface Admin extends User {
  permissions: string[];
}


//Exercice 5
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, age?: number): string {
  if (age != undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}

function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}

function combine(a: number | string, b: number | string): number | string {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    } else if (typeof a == "string" && typeof b == "string") {
        return a + b;
    } else {
      return a.toString() + b.toString();
    }
}

//Exercice 6
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Etudiant extends Person{
    school: string;
    constructor(name: string, age: number, school: string){
        super(name, age);
        this.school = school;
    }
}

abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

interface Drivable {
    drive(distance: number): void;
}

class Car implements Drivable {
    drive(distance: number): void {
        console.log(`Driving car for ${distance} kilometers.`);
    }
}


//Exercice 7
function identity<T>(value:T):T{
    return value;
}

function getFirst<T>(arr: T[]): T|undefined{
    return arr[0];
}

class Repository<T>{

    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.items;
    }
}


/*exercice 10

class livre{
    id:number;
    title:string;
    author:string;
    year:number;
    available:boolean;
    constructor(id:number, title:string, author:string, year:number, available:boolean){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }
}

class Utilisateurs{
    id:number;
    name:string;
    role: "admin" | "user";
    constructor(id:number, name:string, role: "admin" | "user"){
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

class library{
    livres: livre[];
    constructor(livres: livre[]){
        this.livres = livres;
    }

    addBook(livre: livre): void {
        this.livres.push(livre);
    }
    removeBook(id: number): void {
        this.livres = this.livres.filter(livre => livre.id != id);
    }
    findBookByTitle(title: string): livre | undefined {
        return this.livres.find(livre => livre.title == title);
    }
    emprunterLivre(id: number, user: Utilisateurs): void {
        const livre = this.livres.find(livre => livre.id == id);
        if (livre) {
            console.log(`${user.name} a emprunté le livre "${livre.title}".`);
        } else {
            console.log(`Livre non trouvé.`);
        }
    }

    retournerLivre(id: number, user: Utilisateurs): void {
        const livre = this.livres.find(livre => livre.id == id);
        if (livre) {
            console.log(`${user.name} a retourné le livre "${livre.title}".`);
        } else {
            console.log(`Livre non trouvé.`);
        }
    }
}*/