var greet = "Good Morning";
console.log(typeof greet);

console.log("Total no of char:");
var greetLength = greet.length;
console.log(greetLength);

console.log("char find by index:");
var charIndex3 = greet.charAt(3);
console.log(charIndex3);

console.log("last index:");
var charLastIndex = greet.charAt(greetLength - 1);
console.log(charLastIndex);

console.log("find index by char");
var indexOfm = greet.indexOf('M');
console.log(indexOfm);

console.log("undefined char:", greet.indexOf('m'));

console.log("index of o:", greet.indexOf('o'));
console.log("index of last o:", greet.lastIndexOf('o'));

console.log("replace:");
var replacestr = greet.replace("Morning", "Evening");
console.log(replacestr);

console.log("upper case:", replacestr.toUpperCase());

var myName = "  Mohit   Sharma  ";
console.log(myName);

var myNametrim = myName.trim();
console.log("After trim:", myNametrim);

console.log(myName.length);
console.log("after remove space:")
console.log(myNametrim.length);

console.log("count of extra space:", myName.length - myNametrim.length);

console.log("substring include in greet or not:", greet.includes('Mor'));
console.log("substring include in greet or not:", greet.includes('Evening'));

console.log("slice():");
var sliceResult = greet.slice(0, 4);
console.log(sliceResult);

console.log("split():");
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);
console.log(splitResult.length);

 var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti,Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
 var myFriendListResult = myFriendList.split(",");
 console.log(myFriendListResult);
 console.log("length: ", myFriendListResult.length);

 console.log();