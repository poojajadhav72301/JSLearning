var hobby1 = " Listen music";
var hobby2 = " Reading books";
var hobby3 = " Swimmming";
function stringBasics(){
    console.log("****** step 1 ******");
    console.log('My dream company is infosys');
    
    console.log("****** step 2 ******");
    console.log("My hobbies is:" + hobby1, hobby2, hobby3);

    var sumOfTotalChar = hobby1.length + hobby2.length + hobby3.length;
    console.log("Sum of total character:", sumOfTotalChar);
}
stringBasics();