// Remove duplicate items from array
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Original array");
console.log(inputArr);
var array = inputArr.filter(function (element, index) {
    return inputArr.indexOf(element) == index;
});
console.log("After removing duplicate item from array");
console.log(array);
