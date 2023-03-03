console.log("***** Calculate the factorial of total count of words ******");
function factorialOfWordCount(str){
    let fact = 1;
    if(typeof str === "string" && str != ""){
        let strSplit = str.split(" ");
        strSplitLen = strSplit.length;
        console.log(`Total word count "${str}" is: ${strSplitLen}`);
        for(let i = strSplitLen; i >= 1; i--){
            fact = fact * i;
        }
        console.log(`Factorial of ${strSplitLen} is: ${fact}`);
    }
    else{
      console.log(`"${str}" is invalid string`);
    }
}
factorialOfWordCount("Revision is the mother of Success");

console.log(" ");
factorialOfWordCount("We never fail, we always learn");

console.log(" ");
factorialOfWordCount("");

console.log(" ");
factorialOfWordCount(null);

console.log(" ");
factorialOfWordCount("Pooja Rajendra Jadhav");