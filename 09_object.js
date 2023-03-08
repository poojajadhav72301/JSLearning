let student = {
    firstName : "Pooja",
    lastName : "Jadhav",
    age : 24,
    city : "Kundal",
    collegeName : "YMIM"
};
console.log(student);

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


