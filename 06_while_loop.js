console.log("Print no 0 t0 10");
let i = 0; // initilization
while(i <= 10){   // condition
    console.log(i);
    i++;      // update expression
}

console.log(" ");
console.log("Traversing array using while");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let index = 0;
let sum = 0;
while(index < arrayOfNumbers.length){
    const element = arrayOfNumbers[index]
    if(element % 2 == 0){
        console.log(element);
        sum = sum + element;
    }
    index++;
}
console.log(`Sum: ${sum}`);

const array = [];

const arrayOfNumbers1 = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
for(let i = 0; i <= arrayOfNumbers1.length; i++){
    const element = arrayOfNumbers1[i];
    if(element % 2 == 0){
        array.push(element);
    }
}
console.log(array);
