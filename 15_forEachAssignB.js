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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(" ");
console.log("***** step 1 TCS employee deatils *****");
arrayOfEmployee.forEach(element => {
    if(element.emp_company == "TCS"){
        console.log(`Emp name: ${element.emp_name}, Emp company: ${element.emp_company}`);
    }
});

console.log(" ");
console.log("***** step 2 employee salary greater than or equal 50000 *****");
arrayOfEmployee.forEach(element => {
    if(element.emp_salary >= 50000){
        console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp dept: ${element.emp_dept}, Emp salary: ${element.emp_salary}, Emp company: ${element.emp_company}`);
    }
});

console.log(" ");
console.log("***** step 3 sum of all employees salary *****");
let sumOfSalary = 0;
arrayOfEmployee.forEach(element => {
    sumOfSalary = sumOfSalary + element.emp_salary;
});
console.log(`Sum of all employees salary: ${sumOfSalary}`);

console.log(" ");
console.log("***** step 4 salary average *****");
let sum = 0;
let average;
arrayOfEmployee.forEach(element => {
    sum = sum + element.emp_salary;
    average = sum / arrayOfEmployee.length;
});
console.log(`Average of salary: ${average}`);

console.log(" ");
console.log("***** step 5 IT or HR dept emp whose salary is greater than or equal to 75000 *****");
arrayOfEmployee.forEach(element => {
    if((element.emp_company == "IT" || element.emp_company == "HR") || (element.emp_salary >= 75000 )){
        console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp dept: ${element.emp_dept}, Emp salary: ${element.emp_salary}, Emp company: ${element.emp_company}`);
    }
});
