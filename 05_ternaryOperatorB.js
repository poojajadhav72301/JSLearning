console.log("************ step 1 *************");
function maleMarriageEliglibility(gender, age, boyName){
    var resultMale = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for marriage`
            : `Hey ${boyName} you are not eligible for marriage`;
    return resultMale;
}
var result = maleMarriageEliglibility("Male", 25, "Bill Gates");
console.log(result);
var result = maleMarriageEliglibility("Male", 17, "Stew Jobs");
console.log(result);

console.log("************ step 1 *************");
function femaleMarriageEliglibility(gender, age, girlName){
    var resultFemale = gender = "Female" && age >= 18 ? `Hey ${girlName} you are eligible for marriage`
            : `Hey ${girlName} you are not eligible for marriage`;
    return resultFemale;
}
var result = femaleMarriageEliglibility("Female", 16, "Jenifer");
console.log(result);
var result = femaleMarriageEliglibility("Female", 27, "Malinda Gates");
console.log(result);