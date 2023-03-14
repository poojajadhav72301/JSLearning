//console.log("****************** step 1 ************************");
const bankSbi = {
    bankName : "SBI bank",
    branchCode : "SBI453",
    ifsc : "SBI34935845",
    interestRate : 4.5
};

//console.log("****************** step 2 ************************");
const bankLocation = {
    street : "Tilak road",
    city : "Pune",
    pinCode : 443001
};

//console.log("****************** step 3 ************************");
console.log("********** Clone object ************");
//using Object.assign
const sbiBank = Object.assign(bankSbi, bankLocation);
const cloneSbiBank = {...bankSbi, ...bankLocation};
console.log(`SBI bank deatils = Bank name: ${cloneSbiBank.bankName}, Branch code: ${cloneSbiBank.branchCode}, IFSC: ${cloneSbiBank.ifsc}, Interest rate: ${cloneSbiBank.interestRate}, Location: ${cloneSbiBank.street}, ${cloneSbiBank.city}, ${cloneSbiBank.pinCode}`);

  console.log(" ");
  //console.log("****************** step 4 ************************");
  const rateOfInterest = {
     homeLoanInterest : 5.5,
     personalLoanInterest : 4.5,
     duelInterest : 3.5
  };
  //console.log("****************** step 5 ************************");
  console.log("************* Merge the step1, step2, ste4 in new object *************");
  const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
  console.log(`SBI bank deatils = Bank name: ${sbiDetails.bankName}, Branch code: ${sbiDetails.branchCode}, IFSC: ${sbiDetails.ifsc}, Interest rate: ${sbiDetails.interestRate}, Location: ${sbiDetails.street}, ${sbiDetails.city}, ${sbiDetails.pinCode}, 
  Home loan interest: ${sbiDetails.homeLoanInterest}, Personal loan interest: ${sbiDetails.personalLoanInterest}, Due interest: ${sbiDetails.duelInterest}`);

  console.log(" ");
  //console.log("****************** step 6 ************************");
  console.log("********** Traverse object using loop ************");

  for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
    }
  }

