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

const arrayEmployee = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Find the employees whose name start with R....");
arrayEmployee.forEach(employee => {
    let empName = employee.emp_name;
    if (empName.startsWith("R")) {
        console.log(employee);
    }
});

console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
arrayEmployee.forEach(employee => {
    if(employee.emp_company=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy + employee.emp_salary; 
    }
});
console.log(totalSalaryOfInfy);

