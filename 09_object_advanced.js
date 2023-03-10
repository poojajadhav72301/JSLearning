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


const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
//freeze
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);

//concat
const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}
//first way
console.log("first way");
const newObj = {}
Object.assign(newObj, student, address);
console.log(newObj);

//second way
console.log("first way");
let merageObj = Object.assign({}, student, address);
console.log(merageObj);

//  Third way
console.log("first way");
Object.assign(student, address);
console.log(student);

//  Fourth way
console.log("first way");
Object.assign(address, student);
console.log(address);

//Object.freeze(address);

