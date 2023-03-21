const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("***** step 1 index and value *****");
arrayNumbers.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`); 
});

console.log(" ");
console.log("***** step 2 positive numbers *****");
arrayNumbers.forEach(element => {
    if(element > 0){
        console.log(element);
    }
});

console.log(" ");
console.log("***** step 3 negative numbers *****");
const arrayOfNeg = [];
arrayNumbers.forEach(element => {
    if(element < 0){
         arrayOfNeg.push(element);
    }
});
console.log(arrayOfNeg);

console.log(" ");
console.log("***** step 4 even numbers *****");
const arrayOfEven = [];
arrayNumbers.forEach(element => {
     if(element % 2 == 0){
        arrayOfEven.push(element);
     }
});
console.log(arrayOfEven);

console.log(" ");
console.log("***** step 5 sum of all numbers *****");
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(`Sum of all numbers: ${sum}`);

console.log(" ");
console.log("***** step 6 even index *****");
const arrayOfEvenIndex = [];
arrayNumbers.forEach((element, index) => {
    if(index % 2 == 0){
        arrayOfEvenIndex.push(element);
    }
});
console.log(arrayOfEvenIndex);