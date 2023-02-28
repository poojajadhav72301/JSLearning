console.log("***** Check vote eligibility *****");
function voteEligibility(age){
    if(age <= 0 || age > 120 || age == undefined || age == null){
        return `Your ${age} age is invalid`;
    }
    if(age >= 18){
        return `You ${age} age are eligible for voting`;
    }
    else{
        return `You ${age} age are not eligible for voting`;
    }
}
var result = voteEligibility(45);
console.log(result);

var result = voteEligibility(17);
console.log(result);

var result = voteEligibility(8);
console.log(result);

var result = voteEligibility(20);
console.log(result);
var result = voteEligibility(-10);
console.log(result);

var result = voteEligibility(200);
console.log(result);

var result = voteEligibility(0);
console.log(result);

var result = voteEligibility(undefined);
console.log(result);

var result = voteEligibility(null);
console.log(result);

console.log(" ");
console.log("***** Grade calculation *****");
function gradeCalculation(marks){
    if(marks <= 0 || marks > 100 ||isNaN(marks) ||  (typeof marks != "number")){
        console.log(`your ${marks} marks invalid`);
    }
    else{

    if(marks >= 90){
        console.log(`Funtastic marks: ${marks}, your grade is A+`);
    }
    if(marks >= 75 && marks < 90){
        console.log(`Excellent marks: ${marks}, your grade is A`);
    }
    if(marks >= 50 && marks < 75){
        console.log(`Good marks: ${marks}, your grade is B`);
    }
    if(marks >= 35 && marks < 50){
        console.log(`Marks: ${marks}, your grade is C, need improvement`);
    }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);