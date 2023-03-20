console.log("***************** step 1 **********************");
// Arrow function with no argument and no return value
let show = () => {
    console.log("Good Morning, Today is Monday");
}
show();

console.log(" ");

console.log("***************** step 2 **********************");
// Arrow function with argument and no return value
let multiply = (num1, num2, num3 = 1) => {
    let result = num1 * num2 * num3;
    console.log(`Multiply: ${result}`); 
}
multiply(5, 5, 2);
multiply(10,4);

console.log(" ");

console.log("***************** step3 **********************");
// Arrow function with argument and return value
let addition = (n1, n2, n3, n4, n5) => {
    let result = n1 + n2 + n3 + n4 + n5;
    return `Addition: ${result}`;
}
let res1 = addition(100, 100, 200, 349, 756);
console.log(res1);

let res2 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(res2);

