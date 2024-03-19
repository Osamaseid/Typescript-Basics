var isDone = false;
var decimal = 7;
var float = 3.14;
var message = 'Hello, TypeScript!';
var numbers = [1, 2, 3, 4, 5];
var names = ['someone', 'os', 'remedan'];
var person = ['Alice', 25];
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
var dynamicValue = 10;
dynamicValue = 'Hello';
function logMessage() {
    console.log('This is a log message.');
}
var nullValue = null;
var undefinedValue = undefined;
var obj = { name: 'someone', age: 21 };
