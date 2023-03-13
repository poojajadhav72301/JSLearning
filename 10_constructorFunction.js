
class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
        this.show = function(){
            console.log(`${this.fullName}, ${this.city}`);
        }
    }
}
Person.prototype.country = "India";
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
//console.log(personShubham instanceof Bank);
//console.log(sbiBank instanceof Bank);
const dhoni = new Person("MS Dhoni", "Ranchi");
dhoni.show();
console.log(dhoni.country);

const gill = new Person("Shubam Gill", "Mumbai");
gill.show();
console.log(gill.country);

const ash = new Person("R Ashwin", "Chenai");
ash.show();
console.log(ash.country);

//built in object 
const date = new Date();
console.log(date);
console.log(typeof date);

const res = Math.pow(2, 3);
console.log(res);

Object.freeze(Person);