console.log("***** Reverse string *****");
var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
       var charAt = str.charAt(index);
       reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${result}`);

console.log(" ");
console.log("***** reverse last word *****");
var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
       var char = str.charAt(index);
       if(char == " "){
        break;
       }
       reverse = reverse + char;
    }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${result}`);

console.log(" ");
console.log("***** Total Spaces in string ******");
var str = "I am Angular  cham";
var count = 0;
for(let i = 0; i <= str.length; i++){
    var char = str.charAt(i);
    if(char == " "){
        count =  count + 1;
    }
}
console.log(`Total spaces: ${count}`);

console.log(" ");
console.log("***** Total voules in string ******");
var str = "i am angular  cham";
var count = 0;
for(let i = 0; i <= str.length; i++){
    var char = str.charAt(i);
    if((char == "a") || (char == "e") || (char == "i") || (char == "o")){
       count = count + 1;
    }
}
console.log(`Voules: ${count}`);