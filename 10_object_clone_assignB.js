const arrayNums = [20, 3, 4, 56, 90, 400, 49];

console.log("************** step 1 *****************");
const cloneArrayNums = arrayNums; // shallow clone
cloneArrayNums.push(55, 66);
console.log("Original array: ");
console.log(arrayNums);
console.log("Cloned array: ");
console.log(cloneArrayNums);

console.log(" ");
console.log("************** step 2 *****************");
const deepCloneArray = [...arrayNums];
console.log("Cloned array: ");
console.log(cloneArrayNums);
arrayNums.push(10, 25);
console.log("Original array: ");
console.log(arrayNums);

console.log(" ");
console.log("************** step 3 *****************");
const arrayEven = [2, 30, 14, 8];
const mergeArray = arrayNums.concat(arrayEven);
console.log("Merge array: ");
console.log(mergeArray);

console.log(" ");
//console.log("************** step 4 *****************");
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address : {
        locality : {
            colony : "Om vrindavan society",
            street : "Kanch pokli, 431202"
        },
        city : "Mumbai",
        state: "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(" ");
console.log("************** step 5 *****************");
console.log("Employee details: ");
console.log(`Address: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street} , ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);
console.log(`Mobile No: ${employee_info.mobiles}`);

console.log(" ");
console.log("************** step 6 *****************");
const newEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
newEmployeeInfo.salary.july_month = "80k";
newEmployeeInfo.address.country = "United Kingdom";
console.log("Updated property and deep clone using JSON.stringfy()");
console.log(`july_month: ${newEmployeeInfo.salary.july_month}`);
console.log(`Country: ${newEmployeeInfo.address.country}`);



