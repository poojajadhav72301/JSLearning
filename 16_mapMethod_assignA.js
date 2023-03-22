const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("**** step 1 add 10 into each element ****");
const arrayOfadd = arrayNumbers.map((num) => {
     return num + 10;
});
console.log(arrayOfadd);

console.log(" ");
console.log("**** step 2 square of each array element ****");
const arrayOfSquare = arrayNumbers.map((num) => {
    return num ** 2;
});
console.log(arrayOfSquare);

console.log(" ");
console.log("**** step 3 add the index value into element ****");
const arrayOfaddIndex = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(arrayOfaddIndex);
