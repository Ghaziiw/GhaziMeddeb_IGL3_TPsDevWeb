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
