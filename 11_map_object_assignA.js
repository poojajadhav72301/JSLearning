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

// ********************* step 3 ******************
console.log("************ Object created with  data member ****************");
const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);

// ************************ step 4 *******************
for (const bank of setOfBanks) {
    console.log(`Bank name: ${bank.bankName}, Location: ${bank.location}, Account No: ${bank.accountNo}, IFSC: ${bank.ifsc}, Interest rate: ${bank.interestRate}`);
}

const mapOfBanks = new Map();
mapOfBanks.set("Account No: 48574854875", axis_bank);
mapOfBanks.set("Account No: 234587374858", sbi_bank);
mapOfBanks.set("Account No: 90125535235434", icici_bank);
mapOfBanks.set("Account No: 6352438834746", kotak_bank);
mapOfBanks.set("Account No: 2309864322", hdfc_bank);
mapOfBanks.set("Account No: 10537347347", punjab_bank);

console.log(" ");
console.log("**************** Traverse map ***************");
const element = mapOfBanks.get("Account No: 48574854875");
const keyOfMaps = mapOfBanks.keys();
for (const key of keyOfMaps) {
    const element = mapOfBanks.get(key);
    console.log(`${key} = Bank name: ${element.bankName}, Account No: ${element.accountNo}, Interest rate: ${element.interestRate}`);
}