console.log("*************** First 10 prime numbers *****************");
for(let i = 2; i < 30; i++){
    let flag = 0;

    for(let j = 2; j < i; j++){
        if(i % j == 0){
             flag = 1;
            break;
        }
    }

    if(i > 1 && flag == 0){
        console.log(i);
    }
}


console.log(" ");
function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);
