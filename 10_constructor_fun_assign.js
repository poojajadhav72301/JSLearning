//creating function constructor
class Bank {
    constructor(bankName, location, ifscCode, branchCode){
         this.bankName = bankName;
         this.location = location;
         this.ifscCode = ifscCode;
         this.branchCode = branchCode;
         this.show = function(){
            console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`);
         }
         this.time = function(){
            console.log(`${this.bankName} = Open time: ${this.openTime} and Close time: ${this.closeTime}`);
         }
         this.yesShow = function(){
            console.log(`Bank name: ${this.bankName}, Bank code: ${this.branchCode}, Open time: ${this.openTime} of Yes bank`);
         }
    }
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log("*********** Bank deatils **************");
const yesBank = new Bank("Yes Bank", "Pune", "YES475844646", "YES233");
yesBank.show();

console.log(" ");
const sbiBank = new Bank("SBI Bank", "Mumbai", "SBI9857745", "SBI452");
sbiBank.show();

console.log(" ");
const mahaBank = new Bank("Maharashtra Bank", "Sangli", "MAHA534374", "MAHA784");
mahaBank.show();

console.log(" ");
const axisBank = new Bank("Axis Bank", "Satara", "Axis45774598", "Axis875");
axisBank.show();

//Prototype
console.log(" ");
console.log("************* Opening time and Closing time ***************");
sbiBank.time();
axisBank.time();

console.log(" ");
console.log("************ Yes Bank Details *************");
yesBank.yesShow();
