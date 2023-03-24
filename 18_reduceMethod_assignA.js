const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(array_numbers);

console.log(" ");
console.log("*********** step 1 sum of all numbers *************");
const sumOfall = array_numbers.reduce((runningTotal, value) => {
    return runningTotal + value;
});
console.log(`Sum of all numbers: ${sumOfall}`);

console.log(" ");
console.log("*********** step 2 numbers of multiple of 5 and sum it *************");
const arrayMultipleOf5 = array_numbers.filter((element) => {
    return element % 5 == 0;
});

const sum = arrayMultipleOf5.reduce((runningTotal, value) => {
    return runningTotal + value;
});
console.log(`Sum of numbers of multiple of 5: ${sum}`);

