console.log("****** step 1 *******");
function squareOfWordLength(str){
    console.log(`String name: ${str}`);
    var strLength = str.length;
    console.log(`Length of string: ${strLength}`);
    var lengthSquare = strLength ** 2;
    return lengthSquare;
}
var strResult = squareOfWordLength("JavaScript");
console.log(`Length of square: ${strResult}`);

console.log("*********************************");

var  strResult = squareOfWordLength("Google Chrome");
console.log(`Length of square: ${strResult}`);
console.log("*********************************");

var strResult = squareOfWordLength("Developer Smart");
console.log(`Length of square: ${strResult}`);

console.log("****** step 2 *******");
function arithmaticOperator(){
    var word = "I am Angular Developer";
    console.log(`String name: ${word}`);

    var wordLength = word.length;
    console.log(`Length of string: ${wordLength}`);

    var wordSplit = word.split(" ");
    //console.log(wordSplit);

    var wordSplitLength = wordSplit.length;
    //console.log(wordSplitLength);

    var divide = wordLength / wordSplitLength;
    console.log(`Length of string is divide by total no of words: ${divide}`);

    var multiple = wordLength * wordSplitLength;
    console.log(`Length of string is multiple by total no of words: ${multiple}`);
}
arithmaticOperator();