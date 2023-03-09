let student = {
    firstName : "Pooja",
    lastName : "Jadhav",
    age : 24,
    collegeName : "YMIM",
    //nested object
    address : {
        city : "Kundal",
        pin : 416300
    },
    //array in object
    friends : ["Vaishnav", "Komal", "Prachi"],
    //function in object
    show : function(){
        console.log("Function in object");
    },
    addressDetails: function(){
        return `City ${this.address.city}, PIN ${this.address.pin}`;
     }
};
console.log(student.friends);
let last = student.friends[student.friends.length - 1];
console.log(`Last element: ${last}`);

let resultAddress = student.addressDetails();
console.log(resultAddress);

student.show();

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.log(student);

console.log(student.marks);

console.log(typeof student);

// dot notation
console.log(student.firstName);
// [] notation
console.log(student["age"]);

//update property
student.collegeName = "SGM College, Karad";
console.log(student);

console.log(student.age);

//add new property
student.isWorking = true;

student.country = "India";
console.log(student);

//delete property
delete student.isWorking;

console.table(student);

let teacher = {};
teacher.firstName = "Mohit";
console.log(teacher);

console.log(typeof student.age);
console.log(student.address.city);

student.address.pin = 431205;
console.log(student.address.pin);


