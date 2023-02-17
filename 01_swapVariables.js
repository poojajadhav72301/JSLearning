console.log("****** Swap two variables ******")
var nameSweety = "Sweety";
var nameCutie = "Cutie";

console.log("****** Before swapping ******");
console.log("nameSweety:", nameSweety);
console.log("nameCutie", nameCutie);

var temp = nameSweety
nameSweety = nameCutie;
nameCutie = temp;

console.log("****** After swapping ******");
console.log("nameSweety:", nameSweety);
console.log("nameCutie", nameCutie);


console.log("****** Swap three variables ******")
var num1 = 100; 
var num2 = 200;
var num3 = 300;

console.log("****** Before swapping ******");
console.log("num1:", num1);
console.log("num2:", num2);
console.log("num3:", num3);

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("****** After swapping ******");
console.log("num1:", num1);
console.log("num2:", num2);
console.log("num3:", num3);
