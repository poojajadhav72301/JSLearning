class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
console.log(sbiBank);

//const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
//console.log(axisBank);

function tranverse(Bank){
   for (const key in sbiBank) {
    if (Object.hasOwnProperty.call(sbiBank, key)) {
        const element = sbiBank[key];
        console.log(`${key}: ${element}`);
    }
   }
}
tranverse();