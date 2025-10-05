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