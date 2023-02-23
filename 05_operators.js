console.log(`****** Arithmatic operators *******`);
var num1 = 10;
var num2 = 2;
var result = num1 + num2;
console.log(`add: ${result}`);

result = num1 - num2;
console.log(`sub: ${result}`);

result = num1 * num2;
console.log(`mult: ${result}`);

result = num1 / num2;
console.log(`div: ${result}`);

result = num1 % num2;
console.log(`mod: ${result}`);

result = num1 ** num2;
console.log(`expoential: ${result}`);

result = num1 ** 3;
console.log(`expoential: ${result}`);

result = ++num1;
console.log(`increment: ${result}`);

result = --num2;
console.log(`decrement: ${result}`);

console.log(`****** Assigment operators *******`);
var num = 10;
num+= 20; // compound addition
console.log(`compund add: ${num}`);

console.log(`****** Comparison operators *******`);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4);

 //ternary operator

 var marks = 70;
 var result = marks >= 60 ? "Allow" : "Not allow";
 console.log(result);

 var age = 15;
 var res = age >= 18 ? "Allow" : "Not allow";
 console.log(res);

 //even or odd
 var num = 6;
 var result = num % 2 == 0 ? "Even" : "Odd";
 console.log(result);