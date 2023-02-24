console.log("Implicit conversion to String");
// numberic string used with + give the string type
var result;
result = '3' + 2;
console.log(`'3' + 2: ${result}`);

result = '3' + true;
console.log(`'3' + true: ${result}`);

result = '3' + undefined;
console.log(`'3' + undefined: ${result}`);

result = '3' + null;
console.log(`'3' + null: ${result}`);

console.log("");
console.log("Implicit boolean conversion to Number");
// if boolean is used, true is 1, false is 0
var result;
result = '4' - true;
console.log(`'4' - true: ${result}`);

result = 4 + true;
console.log(`4 + true: ${result}`);

result = 4 + false;
console.log(`4 + false: ${result}`);

console.log("");
console.log("Implicit string conversion to Number");
//numberic string used with -, *, / results number type
var result;
result = '4' - '2';
console.log(`'4' - '2': ${result}`);

result = '4' - 2;
console.log(`'4' - 2: ${result}`);

result = '4' * 2;
console.log(`'4' * 2: ${result}`);

result = '4' / 2;
console.log(`'4' / 2: ${result}`);

console.log("");
console.log("Undefined used with number, boolean or null given NaN");
// Arithmatic operation of undefined with number, boolean or null gives NaN
var result;
result = 4 + undefined;
console.log(`4 + undefined: ${result}`);

result = 4 - undefined;
console.log(`4 - undefined: ${result}`);

result = true + undefined;
console.log(`true + undefined: ${result}`);

result = null + undefined;
console.log(`null + undefined: ${result}`);

console.log("");
console.log("Explicit conversion: Convert number strings and boolean values to numbers, In that case we can use Number()");
// string to number
var result;
result = Number('324');
console.log(`'324' to number: ${result}`);

result = Number('324e-1');
console.log(`'324' to number: ${result}`);

result = Number(true);
console.log(`'true to number: ${result}`);

result = Number(false);
console.log(`false to number: ${result}`);

console.log("");
console.log("Explicit conversion: Invalid string to number return NaN");
//if string is invalid number, the result will be NaN
var result;
result = Number('Hello');
console.log(`'Hello' to number: ${result}`);

result = Number(undefined);
console.log(`undefined to number: ${result}`);

result = Number(NaN);
console.log(`NaN to number: ${result}`);

console.log("");
console.log("Explicit conversion: string to number using + operator");
var numInString = "100";
console.log("type of '100': ", typeof numInString);//string

var myNumber = +numInString;
console.log("type of after conversion: ", typeof myNumber);// number

console.log("");
console.log("Explicit conversion: number to string data type conversion using toString() method");
var myNumber = 100;
console.log("type of 100:", typeof myNumber);// number

var afterStringCon = myNumber.toString();
console.log("type of after conversion: ", typeof afterStringCon); // string

