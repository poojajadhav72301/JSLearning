let val1 = prompt("enter maths marks: ");
let val2 = prompt("enter physics marks: ");
let val3 = prompt("enter chemistry marks: ");

let maths : number = +val1;
let phy : number = +val2;
let che : number = +val3;

console.log(`Maths marks: ${maths}`);
console.log(`Physics marks: ${phy}`);
console.log(`Chemistry marks: ${che}`);

let totalMarks : number = maths + phy + che;
console.log(`Total of marks: ${totalMarks}`);
let average : number = totalMarks / 3;
console.log(`Average of marks: ${average}`);

if(average > 90){
   console.log("Grade A");
}
if(average > 70 && average < 90){
    console.log("Grade B");
}
if(average < 70){
    console.log("Grade C");
}