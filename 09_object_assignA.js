console.log("************** Step 1 ****************");
const professor = {
    name : "Mohit Sharma",
    age : 32,
    address : "Pune",
    collegeName : "JSPM, Pune",
    departmentName : "MCA",
    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing"
    },
    certificates : ["Hacker Rank Participation", "Certified IFE course", "Certified Advanced programming"],
    degreeDetails : function(){
        return `Teacher degrees are total degress are: ${this.degrees.engineering}, ${this.degrees.PHD}`;
    }
};
console.log(professor);

console.log("************** Step 2 ****************");
console.log("Including nested object degrees: ");
console.log(professor.degrees);

//console.log(" ");
console.log("************** Step 3 ****************");
console.log("Adding array certificates: ");
console.log(professor.certificates);

//console.log(" ");
console.log("************** Step 4 ****************");
console.log("Add function and concat all degrees: ");
let resultDegreeDetails = professor.degreeDetails();
console.log(resultDegreeDetails);

//console.log(" ");
console.log("************** Step 5 ****************");
console.log("Add totalExperience property: ");
professor.totalExperience = "14 years";
console.log(`Total Experience: ${professor.totalExperience}`);

//console.log(" ");
console.log("************** Step 6 ****************");
console.log("Modify any existing property and complete object console: ");
professor.address = "Sangli";
console.log(`Modify property is address: ${professor.address}`);
console.log(professor);

//console.log(" ");
console.log("************** Step 7 ****************");
console.log("Add new certificate in end of array: ");
professor.certificates.splice(professor.certificates.length, 0, "Oracle Certified");
console.log(professor.certificates);

//console.log(" ");
console.log("************** Step 8 ****************");
let lastEle = professor.certificates[professor.certificates.length - 1];
console.log(`Last element of array certificate: ${lastEle}`);

