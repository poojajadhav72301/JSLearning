var Employee = /** @class */ (function () {
    function Employee(emp_id, emp_name, emp_age, emp_city, emp_married) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_age = emp_age;
        this.emp_city = emp_city;
        this.emp_married = emp_married;
    }
    return Employee;
}());
var obj1Emp = new Employee(101, "Mohit Sharma", 29, "Pune", true);
console.log("Employee id: ".concat(obj1Emp.emp_id));
console.log("Employee name: ".concat(obj1Emp.emp_name));
console.log("Employee age: ".concat(obj1Emp.emp_age));
console.log("Employee city: ".concat(obj1Emp.emp_city));
console.log("Employee married: ".concat(obj1Emp.emp_married));
