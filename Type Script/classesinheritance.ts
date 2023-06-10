class Vehicle{
    name: string;
    constructor(name:string){
    this.name = name;
}

getMname():string{
    return this.name;
}
}
class Car extends Vehicle{
    getNameModel(getNameModel: any) {
        throw new Error("Method not implemented.");
    }
    model: string;
    constructor(model:string,name:string){
        super(name);
        this.model=  model;


    }
}
class Truck extends Vehicle{

    constructor(name:string){
        super (name);
    }
}

var mycar =
new Car("Sports Model...","BMW",)
console.log(mycar.getNameModel);

var truck=
new Truck("Tata truck")
console.log(truck.getMname());