console.log("**** Greater number between two numbers ****");
function greaterNum(num1, num2){
    if(num1 > num2){
       console.log(`${num1} is greater`);
    }
    else{
        console.log(`${num2} is greater`)
    }
}
greaterNum(10, -10);
greaterNum(800, 899);

console.log(" ");
console.log("**** Number is even or odd ****");
function evenOddNum(num){
    if(num % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
var result = evenOddNum(29);
console.log(`20 is ${result}`);

var result = evenOddNum(44);
console.log(`44 is ${result}`);

var result = evenOddNum(0);
console.log(`0 is ${result}`);

var result = evenOddNum(101);
console.log(`101 is ${result}`);

console.log(" ");
console.log("**** Word length is even or odd ****");
function wordLength(str){
    var wordLen = str.length;
    if(wordLen % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
var result = wordLength("JavaScript");
console.log(`JavaScript length is ${result}`);

var result = wordLength("developer");
console.log(`developer length is ${result}`);

var result = wordLength("Google");
console.log(`Google length is ${result}`);
console.log("******************************************");

console.log(" ");
console.log("***** Marriage eligilibity for male ****");
function maleEligibility(gender, age, boyName){
    if(gender == "Male" && age >= 21){
        return "you are eligible for marriage";
    }
    else{
        return "you are not eligible for marriage"
    }
}
var result = maleEligibility("Male", 25, "Bill Gates");
console.log(`Bill Gates ${result}`);

var result = maleEligibility("Male", 17, "Stew Jobs");
console.log(`Stew Jobs ${result}`);

console.log(" ");
console.log("***** Marriage eligilibity for female ****");
function femaleEligibility(gender, age, girlName){
    if(gender == "Female" && age >= 18){
        return "you are eligible for marriage";
    }
    else{
        return "you are not eligible for marriage";
    }
}
var result = femaleEligibility("Female", 16, "Jenifer");
console.log(`Jenifer ${result}`);

var result = femaleEligibility("Female", 27, "Malinda Gates");
console.log(`Malinda Gates ${result}`);

console.log(" ");
console.log("**** Interview eligibility *****");
function interviewEligibility(gradScore, hscScore, sscScore, candidateName){
    if(gradScore >= 70 || hscScore >= 80 || sscScore >90){
        console.log(`${candidateName} you are eligible for TCS interview`);
    }
    else{
        console.log(`${candidateName} you are not eligible for TCS interview`);
    }
}
interviewEligibility(80, 86, 90, "Pooja Jadhav");
interviewEligibility(70, 65, 55, "Vaishnavi Bhosale");
interviewEligibility(60, 79, 88, "Nisha Jadhav");