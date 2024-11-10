function sum(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return "Hello" + name;
}

function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const greeting = greet(" Subh");
console.log(greeting);
