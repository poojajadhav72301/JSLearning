const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);

//console.log(" ");
console.log("************** step 1 *****************");
let arrayLen = arrayNumbers.length;
console.log(`Length of array: ${arrayLen}`);

//console.log(" ");
console.log("************** step 2 *****************");
let firstEle = arrayNumbers[0];
console.log(`First element of array: ${firstEle}`);
let lastEle = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last element of array: ${lastEle}`);

//console.log(" ");
console.log("************** step 3 *****************");
let thirstLastEle = arrayNumbers[arrayNumbers.length - 3];
console.log(`Thirst last element of array: ${thirstLastEle}`);

//console.log(" ");
console.log("************** step 4 *****************");
const arrayEven = [];
for(let i = 0; i < arrayNumbers.length; i++){
    const evenElement = arrayNumbers[i];
    if(evenElement % 2 == 0){
        arrayEven.push(evenElement);
    }
}
console.log("Even number in array: ");
console.log(arrayEven);

//console.log(" ");
console.log("************** step 5 *****************");
const arrayOdd = [];
for(let i = 0; i < arrayNumbers.length; i++){
    const oddElement = arrayNumbers[i];
    if(oddElement % 2 == 1){
        arrayOdd.push(oddElement);
    }
}
console.log("Odd number in array: ");
console.log(arrayOdd);

//console.log(" ");
console.log("************** step 6 *****************");
let i = 0;
let sumOfEven = 0;
while(i < arrayNumbers.length){
    const elementEven = arrayNumbers[i];
    if(i % 2 == 0){
        sumOfEven = sumOfEven + elementEven;
    }
    i++;
}
console.log(`Sum of even position in array: ${sumOfEven}`);

//console.log(" ");
console.log("************** step 7 *****************");
let index = 1;
let sumOfOdd = 0;
while(index < arrayNumbers.length){
    const elementOdd = arrayNumbers[index];
    if(index % 2 == 1){
        sumOfOdd = sumOfOdd + elementOdd;
    }
    index++;
}
console.log(`Sum of odd position in array: ${sumOfOdd}`);

//console.log(" ");
console.log("************** step 8 *****************");
let sumIndex = 0;
let sumAllEle = 0;
while(sumIndex < arrayNumbers.length){
    sumAllEle = sumAllEle + arrayNumbers[sumIndex];
    sumIndex++;
}
console.log(`Sum of all element in array: ${sumAllEle}`);

//console.log(" ");
console.log("************** step 9 *****************");
const arrayMultipleOf5 = [];
for(let i = 0; i < arrayNumbers.length; i++){
    const multipleOf5Element = arrayNumbers[i];
    if(multipleOf5Element % 5 == 0){
        arrayMultipleOf5.push(multipleOf5Element);
    }
}
console.log("Multiple of 5 numbers: ");
console.log(arrayMultipleOf5);

//console.log(" ");
console.log("************** step 10 *****************");
let availableVal1 = arrayNumbers.includes(115);
console.log(`115 number is available: ${availableVal1}`);

//console.log(" ");
console.log("************** step 11 *****************");
let availableVal2 = arrayNumbers.includes(23);
console.log(`23 number is available: ${availableVal2}`);

//console.log(" ");
console.log("************** step 12 *****************");
let insertNum = arrayNumbers.splice(3, 0 , 55, 66);
console.log("Inserting 55, 66 element before index 3: ");
console.log(arrayNumbers);

//console.log(" ");
console.log("************** step 13 *****************");
let delete3Ele = arrayNumbers.splice(4, 3);
console.log("Delete 3 element from index 4: ");
console.log(arrayNumbers);
