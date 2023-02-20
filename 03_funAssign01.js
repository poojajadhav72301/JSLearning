console.log("****** step 1 ******");
//function with no argument and no return type value
function myfuncation(){
    console.log("Javascript function");
}
myfuncation();

function message(){
    console.log("Hello");
}
message();

console.log("****** step 2 ******");
//function with argument and no return type value
function personalDetails(firstName, lastName, collegeName){
   console.log("First name:", firstName);
   console.log("Last name:", lastName);
   console.log("College name:", collegeName);
}
personalDetails("Pooja", "Jadhav", "SGM College, Karad");

console.log("****** step 3 ******");
//swapping program
function swapValuesDude(value1, value2){
   console.log("Before swapping: ", value1, value2);
   var temp = value1;
   value1 = value2;
   value2 = temp;
   console.log("After swapping: ", value1, value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("****** step 4 ******");
// function with arguments and return value
function addThreeValues(n1, n2, n3){
   var add = n1 + n2 + n3;
   return add;
}
var addResult = addThreeValues(10.23, 600, 40);
console.log("Addition of three numbers:", addResult);

var addResult = addThreeValues("Hello", "Good", "Morning");
console.log("Message:", addResult);
