class Car{
  constructor(color){
    this.color = color
  }
  run(){
    console.log("car "+this.color+" Running");
  }
  static showColors(){
    console.log("We support three colors: blue,red,green");
  }
}

Car.showColors()
let carObj=new Car("blue")
carObj.run()
