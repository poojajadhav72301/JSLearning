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

const arrayEmps = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("********** step 1 employees from Wipro company ************");
const arrayEmployee = arrayEmps.filter((element) => {
    return element.emp_company == "Wipro";
});

arrayEmployee.forEach((element) => {
    console.log(`Emp name: ${element.emp_name}, Emp company: ${element.emp_company}`);
});

console.log(" ");
console.log("********** step 2 employees from IT or HR dept ************");
const arrayDepartment = arrayEmps.filter((element) => {
    return element.emp_dept == "IT" || element.emp_dept == "HR";
});

arrayDepartment.forEach((element) => {
    console.log(`Emp name: ${element.emp_name}, Emp dept: ${element.emp_dept}`);
});

console.log(" ");
console.log("********** step 3 employees whose emp_id greater than 50 ************");
const arrayEmpId = arrayEmps.filter((element) => {
    return element.emp_id > 50;
});

arrayEmpId.forEach((element) => {
    console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp dept: ${element.emp_dept}, Emp salary: ${element.emp_salary}, Emp company: ${element.emp_company}`);
});

console.log(" ");
console.log("********** step 4 employees whose name start with 'A' or 'V' or 'M' ************");
const arrayName = arrayEmps.filter((element) => {
    let empname = element.emp_name;
    if ((empname.startsWith("A")) || (empname.startsWith("V")) || (empname.startsWith("M"))){
       return empname; 
    }
});

arrayName.forEach((element) => {
    console.log(`Emp name: ${element.emp_name}`);
});

console.log(" ");
console.log("********** step 5 average salary of employee for all dept ************");
const arraysalary = arrayEmps.map((element) => {
    return element.emp_salary;
});

const sumOfSalary = arraysalary.reduce((runningTotal, value) => {
    return runningTotal + value;
});
let average = sumOfSalary / arraysalary.length;
console.log(`Average salary: ${average}`);

