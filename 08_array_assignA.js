const arraySeasonalFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
//print first and last element of array
console.log("******************* step 1 *******************");
let firstElement = arraySeasonalFruit[0];
console.log(`First element of array: ${firstElement}`);
let secondElement = arraySeasonalFruit[arraySeasonalFruit.length - 1];
console.log(`First element of array: ${secondElement}`);

console.log(" ");
//insert papaya into array
console.log("******************* step 2 *******************");
let addElement = arraySeasonalFruit.unshift("Papaya");
console.log("Inserying Papaya element in array");
console.log(arraySeasonalFruit);

console.log(" ");
//remove mango from array
console.log("******************* step 3 *******************");
let removeElement = arraySeasonalFruit.splice(4, 1);
console.log("Removing Mango element in array")
console.log(arraySeasonalFruit);

console.log(" ");
// Inserting Pineapple into array
console.log("******************* step 4 *******************");
let insertElement = arraySeasonalFruit.push("Pineapple");
console.log("Insering Pineapple element in array");
console.log(arraySeasonalFruit);

console.log(" ");
// Insert an elment Dragon fruit before Water Melon
console.log("******************* step 5 *******************");
let insertDFBeforeWM = arraySeasonalFruit.splice(4, 0, "Dragon Fruit");
console.log("Inserting Dragon Fruit element before Water Melon in array");
console.log(arraySeasonalFruit);

console.log(" ");
//Replace an element Orange with Kiwi
console.log("******************* step 6 *******************");
let replaceElement = arraySeasonalFruit.splice(2, 1, "Kiwi");
console.log("Replacing an element Orange with Kiwi");
console.log(arraySeasonalFruit);

console.log(" ");
//print the elements starting from index 1 to 4
console.log("******************* step 7 *******************");
let index1To4 = arraySeasonalFruit.slice(1, 5);
console.log("print 1 to 4 element");
console.log(index1To4);

console.log(" ");
//Select last 3 element 
console.log("******************* step 8 *******************");
let last3Ele = arraySeasonalFruit.slice(arraySeasonalFruit.length - 3);
console.log("Print last 3 element");
console.log(last3Ele);
