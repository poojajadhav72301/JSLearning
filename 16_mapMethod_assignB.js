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

const arrayEmployees = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("***** step 1 list of all employee name *****");
const arrayEmpName = arrayEmployees.map((element) => {
    return element.emp_name;
});
console.log(arrayEmpName);

console.log(" ");
console.log("***** step 2 list of all departments *****");
const arrayDept = arrayEmployees.map((element) => {
    return element.emp_dept;
});
console.log(arrayDept);

console.log(" ");
console.log("***** step 3 list of all employee id *****");
const arrayEmpId = arrayEmployees.map((element) => {
    return element.emp_id;
});
console.log(arrayEmpId);

console.log(" ");
console.log("***** step 4 list of employee name working in TCS *****");
const arrayTCS = [];
arrayEmployees.map((element) => {
    if(element.emp_company == "TCS"){
        arrayTCS.push(element.emp_name);
        //console.log(`${element.emp_name}`);
    }
});
console.log(arrayTCS);