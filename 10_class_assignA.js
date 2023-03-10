console.log("**************** step 1 ******************");
class Vehicle {
    constructor(name, model, color, prize){
        this.name = name;
        this.model = model;
        this.color = color;
        this.prize = prize;
    }
}
const toyotaVehicle = new Vehicle("Toyota", "Fortuner legender", "Black", "50 lakh");

const mercedesVehicle = new Vehicle("Mercedes", "Benz G-class", "Red", "1.7 cr");

const tataVehicle = new Vehicle("Tata", "Harrier", "Black", "20 lakh");

const mahindraVehicle = new Vehicle("Mahindra", "Thar", "Black", "11 lakh");

const fordVehicle = new Vehicle("Ford", "Endeavors", "Black", "35 lakh");

const arrayVehicle = [toyotaVehicle, mercedesVehicle, tataVehicle, mahindraVehicle, fordVehicle];
for(let i = 0; i < arrayVehicle.length; i++){
    const element = arrayVehicle[i];
    console.log(`Vehicle name: ${element.name}, Vehicle model: ${element.model}, Vehicle prize: ${element.prize}, Vehicle color: ${element.color}`);
}

console.log(" ");
console.log("**************** step 2 ******************");
class College{
    constructor(name, university, location, grade){
         this.name = name;
         this.university = university;
         this.location = location;
         this.grade = grade;
    }
}
const sgmCollege = new College("SGM College", "Shivaji University", "Karad", "A+");
console.log(sgmCollege);

const ymimCollege = new College("YMIM College", "Bharti Vidyapeeth", "Karad", "A");
console.log(ymimCollege);

const mitCollege = new College("MIT College", "Pune University", "Pune", "A++");
console.log(mitCollege);

const jspmCollege = new College("JSPM College", "Pune University", "Pune", "A+");
console.log(jspmCollege);

console.log(" ");
console.log("**************** step 3 ******************");
function traverseObject(College){
     for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}: ${element}`);
        }
     }
}
traverseObject(sgmCollege);
console.log(" ");
traverseObject(ymimCollege);
console.log(" ");
traverseObject(mitCollege);
console.log(" ");
traverseObject(jspmCollege);


