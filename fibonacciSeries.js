console.log("************* Fibonacci series ***************");
let number = 5;
let n1 = 0, n2 = 1, nextTerm;

console.log(`Fibonacci series of ${number}`);

for(let i = 1; i <= number; i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

