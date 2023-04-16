class Car{
  constructor(color){
    this.color = color
  }
  run(){}
}

let car = new Car("green")

let carProto=Object.getPrototypeOf(car)
console.log(carProto);

let objectProto=Object.getPrototypeOf(carProto)
console.log(objectProto);

let lastOne=Object.getPrototypeOf(objectProto)
console.log(lastOne);