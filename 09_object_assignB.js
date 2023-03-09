
const sbiBank = {
    bankName : "SBI Bank",
    location : "Sangli",
    accountNo : 0364362343,
    idsc : 84548584,
    interestRate : 3.5,
    showDetails : function(){
        console.log(`Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo},IDFC Code: ${this.idsc}, Interest Rate: ${this.interestRate}`);
    }
};

const axisBank = {
    bankName : "Axis Bank",
    location : "Pune",
    accountNo : 6455757865,
    idsc : 438975847,
    interestRate : 2.7,
    showDetails : function(){
        console.log(`Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo},IDFC Code: ${this.idsc}, Interest Rate: ${this.interestRate}`);
    }
};

const hdfcBank = {
    bankName : "HDFC Bank",
    location : "Mumbai",
    accountNo : 1234709488,
    idsc : 958837375,
    interestRate : 5.8,
    showDetails : function(){
        console.log(`Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo},IDFC Code: ${this.idsc}, Interest Rate: ${this.interestRate}`);
    }
};

const yesBank = {
    bankName : "Yes Bank",
    location : "Satara",
    accountNo : 4654574877,
    idsc : 34737893473,
    interestRate : 4.4,
    showDetails : function(){
        console.log(`Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo},IDFC Code: ${this.idsc}, Interest Rate: ${this.interestRate}`);
    }
};

console.log("******* SBI Bank ********");
sbiBank.showDetails();

//console.log(" ");
console.log("******** Asix Bank ********");
axisBank.showDetails();

//console.log(" ");
console.log("******** HDFC Bank ********");
hdfcBank.showDetails();

//console.log(" ");
console.log("******** Yes Bank ********");
yesBank.showDetails();


