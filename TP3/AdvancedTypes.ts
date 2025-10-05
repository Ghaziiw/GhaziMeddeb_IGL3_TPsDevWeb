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
