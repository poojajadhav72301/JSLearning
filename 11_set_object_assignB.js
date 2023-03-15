// ******************* step 1 ********************
class Bank  {
    constructor(bankName, location, accountNo, ifsc, interestRate){
         this.bankName = bankName;
         this.location = location;
         this.accountNo = accountNo;
         this.ifsc = ifsc;
         this.interestRate = interestRate;
    }
}
// ***************** step 2 *******************
const axis_bank = new Bank("Axis bank", "Mumbai", "48574854875", "AXIS457", 5.5);
const sbi_bank = new Bank("SBI bank", "Pune", "234587374858", "SBI8374", 4.5);
const icici_bank = new Bank("ICICI bank", "Sangli", "90125535235434", "ICICI234", 6.7);
const kotak_bank = new Bank("Kotak bank", "Satara", "6352438834746", "KOTAK897", 3.5);
const hdfc_bank = new Bank("HDFC bank", "Kolhapur", "2309864322", "HDFC0653", 7.3);
const punjab_bank = new Bank("Punjab bank", "Karad", "10537347347", "PUNJAB234", 8.5);

// ***************** step 3 *******************
console.log("************ Object created with  data member ****************");
const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);

for (const bank of setOfBanks) {
    console.log(`Bank name: ${bank.bankName}, Location: ${bank.location}, Account No: ${bank.accountNo}, IFSC: ${bank.ifsc}, Interest rate: ${bank.interestRate}`);
}
 
console.log(" ");
console.log("**************** Traverse map ***************");
for (const element of setOfBanks) {
    console.log(`Bank name: ${element.bankName}, Location: ${element.location}`);
}


