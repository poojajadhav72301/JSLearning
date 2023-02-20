/*var num1 = 100;
var num2 = 200;

function swap(val1, val2){
    console.log("Before swapping:", val1, val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("After swapping:", val1, val2);
}
swap(num1, num2);*/

// function with no arguments and no return value
function showFullName(){
   console.log("Full name: Pooja R Jadhav");
}
showFullName();// functiom call / invoke

// function with  arguments and no return value
function showAge(age){
  console.log("Age:", age);
}
showAge(24);

// function with no arguments and with return value
function fullName(){
    var name = "Pooja Jadhav";
    return name;
}
var fName = fullName();
console.log(fName);

// function with arguments and return value
function sumOfNumbers(num1, num2, num3){
  var sum = num1 + num2 + num3;
  return sum;
}
var sumResult = sumOfNumbers(10, 45, 79);
console.log(sumResult);

// swapping 
var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "Prachi";
var name2 = "vaishnavi";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);