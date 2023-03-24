const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log(arrayRollNumbers);

console.log("************** step 1 Reverse array ***************");
const arrayReverse = arrayRollNumbers.reverse();
console.log(arrayReverse);

console.log(" ");
console.log("************** step 2 Sort array ***************");
const arraySort = arrayRollNumbers.sort();
console.log(arraySort);

console.log(" ");
console.log("************** step 3 Sort array in ascending order ***************");
const arraySortInAO = arrayRollNumbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(arraySortInAO);

console.log(" ");
console.log("************** step 4 greatest number from array ***************");
let greaterNum = arraySortInAO[arraySortInAO.length - 1];
console.log(`Greatest number from array: ${greaterNum}`);

console.log(" ");
console.log("************** step 5 smallest number from array ***************");
let smallestNum = arraySortInAO[0];
console.log(`Smallest number from array: ${smallestNum}`);

console.log(" ");
console.log("************** step 6 remove duplicate element from array ***************");
const arrayNum = arrayRollNumbers.filter((element, index) => {
    return arrayRollNumbers.indexOf(element) == index;
});
console.log(arrayNum);