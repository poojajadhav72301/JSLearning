class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("******* step 1 employees from TCS *********");
const arrayTCS = arrayEmployee.filter((element) => {
    return element.emp_company == "TCS";
});
arrayTCS.forEach((element) => {
    console.log(`Emp name: ${element.emp_name}, Emp company: ${element.emp_company}`);
});

console.log(" ");
console.log("******* step 2 average salary of emp from Wipro *********");
//let sum = 0;
const arrayAvg = arrayEmployee.filter((element) => {
    return element.emp_company == "Wipro";
});
let sum = 0;
let average;
arrayAvg.forEach((element) => {
    sum = sum + element.emp_salary;
    average = sum / arrayAvg.length;
});
console.log(`Average salary of emp from Wipro: ${average}`);

console.log(" ");
console.log("******* step 3 average salary of emp from Wipro and Infy *********");
const avgArray = arrayEmployee.filter((element) => {
    return element.emp_company == "Wipro" || element.emp_company == "Infy";
});

let sumOfall = 0
let avg;
avgArray.forEach((element) => {
    sumOfall = sumOfall + element.emp_salary;
    avg = sumOfall / avgArray.length;
});
console.log(`Average salary of emp from Wipro and Infy: ${avg}`);

    



