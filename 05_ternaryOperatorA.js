console.log("********** step 1 ************");
function greaterNumber(num1, num2){
   var resultNum = num1 > num2 ? `${num1} is greater` : `${num2} is greater`;
   console.log(`Greater number between two numbers: ${resultNum}`);
   
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("********** step 2 ************");
function isEvenOrOddNum(num){
    var result = num % 2 == 0 ? `${num} is true` : `${num} is false`;
    return result;
}
var res = isEvenOrOddNum(29);
console.log(res);
var res = isEvenOrOddNum(44);
console.log(res);
var res = isEvenOrOddNum(0);
console.log(res);
var res = isEvenOrOddNum(101);
console.log(res);

console.log("********** step 3 ************");
function wordLength(word){
    var wordLength = word.length;
    var resultWordLen = wordLength % 2 == 0 ? "Even" : "Odd";
    return resultWordLen;
}
var result = wordLength("JavaScript");
console.log(`JavaScript length is ${result}`);
var result = wordLength("developer");
console.log(`developer length is ${result}`);
var result = wordLength("Google");
console.log(`Google length is ${result}`);


