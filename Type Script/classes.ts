class Employee1{
    private fname: string;
    private mname?: string;
    private lname: string;
}
//     constructor(fname:string,mname:string,lname:string)
// }
//     getMname();string{
        
    //     return this.mname;
    // }

class Employee{
   private readonly empno: number;
    private ename: string;
    private sal:number;
    private attendance: number;

    




// constructor(){
//     this.empno=101;
//     this.ename="abc";
//     this.sal= 20000;
//     this.attendance= 18;
// }
constructor(empno: number,ename:string,sal:number,attendance:any)
       {this.empno=empno;
       this.ename=ename;
       this.sal= sal;
       this.attendance= attendance;
       }


print():void{
    console.log(this.empno,
        this.ename,
        this.sal,
        this.attendance)
}
}


// var emp =new Employee();
// var emp1 =new Employee();
// emp1.empno= 102;
// var emp2 =new Employee();
// emp2.empno=103;



let emp = new Employee(1,'adc',3000,40);
let emp1 = new Employee(2,'bbc',8000,60);
let emp2 = new Employee(3,'ytt',7800,70);
emp.print();
emp1.print();
emp2.print();

function getMname() {
    throw new Error("Function not implemented.");
}
//var emparray : Employee[]=[emp,emp1,emp2]


