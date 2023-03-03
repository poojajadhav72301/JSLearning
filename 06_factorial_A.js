console.log("***** calculate factorial of number ******");
function factorialOfNum(num){
    fact = 1;
    if((num <= 0) || (num == null) || (typeof num != "number") || isNaN(num)){
        return `${num} is invalid number`;
    }
    for(let i = num; i >= 1; i--){
        fact = fact * i;
    }
    return `Factorial of ${num} is: ${fact}`;
}
let result1 = factorialOfNum(5);
console.log(result1);

console.log(" ");
let result2 = factorialOfNum(3);
console.log(result2);

console.log(" ");
let result3 = factorialOfNum(null);
console.log(result3);

console.log(" ");
let result4 = factorialOfNum(8);
console.log(result4);

console.log(" ");
let result5 = factorialOfNum(undefined);
console.log(result5);

console.log(" ");
let result6 = factorialOfNum(9);
console.log(result6);

console.log(" ");
let result7 = factorialOfNum(0);
console.log(result7);
