var str = "  Hey you are doing good, keep it up  ";
function stringHandsOn(){
    console.log("****** step 1 ******");
    console.log(str);

    console.log("****** step 2 ******");
    var strLength = str.length;
    console.log("Length:", strLength);

    console.log("****** step 3 ******");
    var strTrim = str.trim();
    console.log("After triming:", strTrim, ",After triming length:", strTrim.length);

    console.log("****** step 4 ******");
    console.log("Total no of extra space:", str.length - strTrim.length);

    console.log("****** step 5 ******");
    var charIndex0 = strTrim.charAt(0);
    var charIndexLast = strTrim.charAt(strTrim.length - 1);
    console.log("First character:", charIndex0, ",Last character:", charIndexLast);

    console.log("****** step 6 ******");
    var splitResult = strTrim.split(" ");
    console.log("Length after split:", splitResult.length);

    console.log("****** step 7 ******");
    var indexOfGood = str.indexOf('good');
    console.log("Index of good:", indexOfGood);

    console.log("****** step 8 ******");
    var sliceString = str.slice(22);
    console.log(sliceString);
    str.substring(22);
    console.log(sliceString);

    console.log("****** step 9 ******");
    var stringEnds = strTrim.endsWith("up");
    console.log(stringEnds);

    console.log("****** step 10 ******");
    var stringStarts = strTrim.startsWith("Hey");
    console.log(stringStarts);

    console.log("Length o f string is:", str.length);
}
stringHandsOn();