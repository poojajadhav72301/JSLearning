const employee = {
    id: 124567,
    name: "Elon Musk",
    country : "US",
    city: "Silicon Valley"
 }

 //for in loop
 console.log("Using for in loop traverse object");
 for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
 }

 //keys
console.log("Keys");
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

//values
console.log("values");
const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

//entries
console.log("entries");
const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);

//in operator
console.log("in operator");
const isIdAvailable = "id" in employee;
console.log(`isIdAvailable: ${isIdAvailable}`);