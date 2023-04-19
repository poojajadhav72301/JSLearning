var val1 = prompt("enter maths marks: ");
var val2 = prompt("enter physics marks: ");
var val3 = prompt("enter chemistry marks: ");
var maths = +val1;
var phy = +val2;
var che = +val3;
console.log("Maths marks: ".concat(maths));
console.log("Physics marks: ".concat(phy));
console.log("Chemistry marks: ".concat(che));
var totalMarks = maths + phy + che;
console.log("Total of marks: ".concat(totalMarks));
var average = totalMarks / 3;
console.log("Average of marks: ".concat(average));
if (average > 90) {
    console.log("Grade A");
}
if (average > 70 && average < 90) {
    console.log("Grade B");
}
if (average < 70) {
    console.log("Grade C");
}
