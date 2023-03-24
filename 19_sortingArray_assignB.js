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

const arrayEmployees = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("*********** step 1 Sort emp_id in ascending order **************");
const arrayEmpId = arrayEmployees.filter((element) => {
    return element.emp_id;
});

arrayEmpId.forEach((element) => {
    console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp dept: ${element.emp_dept}`);
});

console.log(" ");
console.log("*********** step 2 Sort emp_dept in ascending order **************");
const arrayDept = arrayEmployees.filter((element) => {
    return element.emp_dept;
});

const arraySortDept = arrayDept.sort((a, b) => {
    return a.emp_dept > b.emp_dept ? 1 : -1
});

arraySortDept.forEach((element) => {
    console.log(`Emp id: ${element.emp_id}, Emp dept: ${element.emp_dept}, Emp company: ${element.emp_company}`);
});

console.log(" ");
console.log("*********** step 3 Sort emp_salary in descending order **************");
const arraySalary = arrayEmployees.filter((element) => {
    return element.emp_salary;
});

const arraySortSalary = arraySalary.sort((a, b) => {
    return a.emp_salary > b.emp_salary ? -1 : 1;
});

arraySortSalary.forEach((element) => {
    console.log(`Emp name: ${element.emp_name}, Emp salary: ${element.emp_salary}, Emp company: ${element.emp_company}`);
})




