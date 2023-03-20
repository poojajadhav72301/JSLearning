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

const array_employess = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("************** step 1 - Employee working in TCS *****************");
for (const element of array_employess) {
    if(element.emp_company == "TCS"){
        console.log(`Emp name: ${element.emp_name}, Emp Company: ${element.emp_company}`); 
    }
}

console.log(" ");
console.log("************** step 1 - Employee working in finance dept *****************");
for (const element of array_employess) {
    if(element.emp_dept == "Finance"){
        console.log(`Emp name: ${element.emp_name}, Emp Department: ${element.emp_dept}`); 
    }
}

console.log(" ");
console.log("************** step 3 - Employee name start with R *****************");
for (const element of array_employess) {
    if(element.emp_name.startsWith('R')){
        console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp Department: ${element.emp_dept}, Emp Salary: ${element.emp_salary}, Emp Company: ${element.emp_company}`);
    }
}

console.log(" ");
console.log("************** step 4 - Employee salary is greater than 75000 *****************");
for (const element of array_employess) {
    if(element.emp_salary > 75000){
        console.log(`Emp name: ${element.emp_name}, Emp Company: ${element.emp_company}, Emp Salary: ${element.emp_salary}`);
    }
}

console.log(" ");
console.log("************** step 5 - Employee salary is greater than equal to 50000 from IT dept *****************");
for (const element of array_employess) {
    if(element.emp_salary >= 50000 && element.emp_dept == "IT"){
        console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp Department: ${element.emp_dept}, Emp Salary: ${element.emp_salary}, Emp Company: ${element.emp_company}`);
    }
}

console.log(" ");
console.log("************** step  - Employee from IT dept *****************");
for (const element of array_employess) {
    if(element.emp_company == "Infy"){
        console.log(`Emp id: ${element.emp_id}, Emp name: ${element.emp_name}, Emp Department: ${element.emp_dept}, Emp Salary: ${element.emp_salary}, Emp Company: ${element.emp_company}`);
    }
}



