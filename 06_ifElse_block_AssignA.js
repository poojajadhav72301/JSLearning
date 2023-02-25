console.log("********** step 1 ************");
function checkEvenOdd(num){
    if(num % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
var result = checkEvenOdd(45);
console.log(`45 is ${result}`);

var result = checkEvenOdd(67);
console.log(`67 is ${result}`);

var result = checkEvenOdd(70);
console.log(`70 is ${result}`);

var result = checkEvenOdd(90);
console.log(`90 is ${result}`);

console.log(" ");
console.log("********** step 2 ************");
function voteEligibility(age){
    if(age >= 18){
        console.log(`Age ${age} is eligilble for voting`);
    }
    else{
        console.log(`Age ${age} is not eligilble for voting`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(" ");
console.log("********** step 3 ************");

function stringGreater(str){
    var strLen = str.length;
    if(strLen > 10){
        console.log(`${str} have more than 10 character`);
    }
    else{
        console.log(`${str} have less than 10 character`);
    }
}
stringGreater("JavaScript-ES6");

console.log(" ");
console.log("********** step 4 ************");
function stringStartWith(str){
    var strStartWith = str.slice(0, 4);
    if(strStartWith == "Java"){
        console.log("String start with Java");
    }
    else{
        console.log("String not start with Java");
    }
}
stringStartWith("JavaScript Languages");