var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    return Employee1;
}());
//     constructor(fname:string,mname:string,lname:string)
// }
//     getMname();string{
//     return this.mname;
// }
var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal= 20000;
    //     this.attendance= 18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp =new Employee();
// var emp1 =new Employee();
// emp1.empno= 102;
// var emp2 =new Employee();
// emp2.empno=103;
var emp = new Employee(1, 'adc', 3000, 40);
var emp1 = new Employee(2, 'bbc', 8000, 60);
var emp2 = new Employee(3, 'ytt', 7800, 70);
emp.print();
emp1.print();
emp2.print();
function getMname() {
    throw new Error("Function not implemented.");
}
//var emparray : Employee[]=[emp,emp1,emp2]
