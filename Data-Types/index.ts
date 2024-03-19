let isDone: boolean = false;
let decimal: number = 7;
let float: number = 3.14;
let message: string = 'Hello, TypeScript!';
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['someone', 'os', 'remedan'];
let person: [string, number] = ['Alice', 25];

enum Color {
    Green,
    Yellow,
    Red,
}

let backgroundColor: Color = Color.Red;

let dynamicValue: any = 10;
dynamicValue = 'Hello';

function logMessage(): void {
  console.log('This is a log message.');
}

let nullValue: null = null;
let undefinedValue: undefined = undefined;

let obj: object = { name: 'someone', age: 21 };