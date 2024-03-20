// Example of manipulating arrays
let fruits: string[] = ["apple", "banana", "orange"];
fruits.push("habhab");
fruits.pop();
fruits.shift();
fruits.unshift("temer");
fruits.splice(1, 1);

// Example of array iteration
fruits.forEach(function(fruit: string) {
  console.log(fruit);
});