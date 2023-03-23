const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("******** step 1 greater than 50 numbers **********");
const newArray = arrayNumbers.filter((element) => {
    return element > 50;
});
console.log(newArray);

console.log(" ");
console.log("******** step 2 even numbers **********");
const arrayEven = arrayNumbers.filter((element) => {
    return element % 2 == 0;
});
console.log(arrayEven);

console.log(" ");
console.log("******** step 3 odd numbers **********"); 
const arrayOdd = arrayNumbers.filter((element) => {
    return element % 2 == 1;
});
console.log(arrayOdd);

console.log(" ");
console.log("******** step 4 multiple of 5 numbers **********");
const arrayMultipleOf5 = arrayNumbers.filter((element) => {
    return element % 5 == 0;
});
console.log(arrayMultipleOf5);

console.log(" ");
console.log("******** step 5 numbers between 20 and 50 **********");
const arrayNum = arrayNumbers.filter((element) => {
     return element > 20 && element < 50;
});
console.log(arrayNum);