export abstract class Person {
    id:number;
    name:string;
    // role: "admin" | "user";
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
}

export class User extends Person {
    role : "admin" | "user";
    constructor(id:number, name:string, role : "admin" | "user"){
        super(id, name);
        this.role = role;
    }
}