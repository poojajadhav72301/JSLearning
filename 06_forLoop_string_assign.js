console.log("***** step 1 vowels count given string *****");
var vowelsCount = function(str){
    var count = 0;
    for(let i = 0; i <= str.length; i++){
        var char = str.charAt(i);
        if((char == "a" || char == "A") || (char == "e" || char == "E") || (char == "i" || char == "I") ||
           (char == "o" || char == "O") || (char == "u" || char == "U")){
              count = count + 1;
           }
    }
    console.log(`Given string is: "${str}"`);
    return `Total count of vowels is: ${count}`;
}
var result = vowelsCount("JavaScript is the languages Of Internet");
console.log(result);

console.log(" ");
var result = vowelsCount("I am Angular Developer");
console.log(result);

console.log(" ");
var result = vowelsCount("Hard work and commitment is the key of success");
console.log(result);

console.log(" ");
console.log("***** step 2 count total character in last word in given string *****");
function lastWordCharsCount(str){
    var count = 0;
    for(let i = str.length-1; i >= 0; i--){
        var char = str.charAt(i);
        if(char == " "){
            break;
        }
        count = count + 1;
    }
    console.log(`Given string: "${str}"`);
    return `Total count of last word is: ${count}`;
}
var result = lastWordCharsCount("JavaScript is the languages Of Internet");
console.log(result);

console.log(" ");
var result = lastWordCharsCount("I am Angular Developer");
console.log(result);

console.log(" ");
var result = lastWordCharsCount("Hard work and commitment is the key of success");
console.log(result);

