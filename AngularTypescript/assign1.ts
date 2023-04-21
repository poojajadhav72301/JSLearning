console.log("******* create class with property *******");
class Employee {
    public emp_id: number;
    public emp_name: string;
    public emp_city: string;
    public emp_salary: number;

    constructor(emp_id: number, emp_name: string, emp_city: string, emp_salary: number){
          this.emp_id = emp_id;
          this.emp_name = emp_name;
          this.emp_city = emp_city;
          this.emp_salary = emp_salary;
    }
}
let obj1Emp = new Employee(101, "Vaishnavi Bhosale", "Karad", 45000);
console.log(obj1Emp);
let obj2Emp = new Employee(102, "Pooja Jadhav", "Kundal", 40000);
console.log(obj2Emp);

console.log(" ");
console.log("******* make transportAvail property optional *******");
function show(emp_id: number, emp_name: string, transportAvail?: string){
    console.log("Id: ", emp_id);
    console.log("Name: ", emp_name);
    if(transportAvail != undefined){
        console.log("TransportAvail: ", transportAvail);
    }
}
show(obj2Emp.emp_id, obj2Emp.emp_name);

console.log(" ");
console.log("******* create method findEmployees and make it overloading *******");
function findEmployees(emp: number);
function findEmployees(emp: string);

function findEmployees(emp: any){
    if(emp && typeof emp === "number"){
        //console.log(emp);
        console.log("datatype of emp is number: ",emp)
    }
    else if(emp && typeof emp === "string"){
       // console.log(emp);
        console.log("datatype of emp is string: ",emp);
    }
}
findEmployees(obj1Emp.emp_id);
findEmployees(obj1Emp.emp_name);

console.log(" ");
console.log("******* implement module using import export *******");

export function even(num: number): boolean {
    console.log(`${num} is even`);
    return num % 2 == 0;
}