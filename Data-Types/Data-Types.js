var isDone = false;
var decimal = 6;
var float = 3.14;
var message = 'Hello, TypeScript!';
var numbers = [1, 2, 3, 4, 5];
var names = ['Alice', 'Bob', 'Charlie'];
var person = ['Alice', 25];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
var dynamicValue = 10;
dynamicValue = 'Hello';
function logMessage() {
    console.log('This is a log message.');
}
var nullValue = null;
var undefinedValue = undefined;
var obj = { name: 'Alice', age: 25 };
