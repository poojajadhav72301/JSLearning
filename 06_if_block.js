console.log("if statment");
var num = 10;
if (num > 0) {
  console.log(`${num} is positive`);
}

var ageForVote = 24;
if (ageForVote >= 18) {
  console.log("You are eliligible for voting");
}
console.log("exit");

function checkEvenOdd(n) {
  if (num % 2 == 0) {
    return "Even";
  }
  if (num % 2 != 0) {
    return "Odd";
  }
}
var result = checkEvenOdd(45);
console.log(`45 is ${result}`);

console.log(" ");
console.log("if - else statment");
var num1 = -5;
if (num1 > 0) {
  console.log(`${num1} is positive`);
} else {
  console.log(`${num1} is negative`);
}

function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age >= 21) {
    console.log("You are eligible");
  } else {
    console.log("You are not eligible");
  }
}
maleMarriageEligibility("Male", 27, "Bill Gates");
maleMarriageEligibility("Male", 20, "Anil");


var str = "JavaScript";
var s = str.substring(0, 4);
console.log(s);
if (s = "Java"){
    console.log(true);
}