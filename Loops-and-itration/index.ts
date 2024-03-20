// for loop
console.log("Example 1: for loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop
console.log("Example 2: while loop");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//do-while loop
console.log("Example 3: do-while loop");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// for...of loop (iterating over an array)
console.log("Example 4: for...of loop");
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}

// for...in loop (iterating over an object)
console.log("Example 5: for...in loop");
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key + ": " + object[key]);
}