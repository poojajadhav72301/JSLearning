class Employee {
    public emp_id: number;
    public emp_name: string;
    public emp_age : number;
    public emp_city : string;
    public emp_married : boolean;

    constructor(emp_id: number, emp_name: string, emp_age: number, emp_city: string, emp_married: boolean){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_age = emp_age;
        this.emp_city = emp_city;
        this.emp_married = emp_married;
    }
}
let obj1Emp = new Employee(101, "Mohit Sharma", 29, "Pune", true);
console.log(`Employee id: ${obj1Emp.emp_id}`);
console.log(`Employee name: ${obj1Emp.emp_name}`);
console.log(`Employee age: ${obj1Emp.emp_age}`);
console.log(`Employee city: ${obj1Emp.emp_city}`);
console.log(`Employee married: ${obj1Emp.emp_married}`);
