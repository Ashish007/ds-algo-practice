// class based inheritance
class Person {
  constructor(name, age, nativePlace) {
    this.name = name;
    this.age = age;
    this.nativePlace = nativePlace;
  }
}

class Employee extends Person {
  constructor(salary) {
    super();
    this.salary = salary;
  }
}

let employee = new Employee();
employee.age = 23;
employee.name = "Ashish";
employee.nativePlace = "Sahars";
employee.salary = 20000;
console.log(employee);

// Factory function used for composition

//Example 1
const dog = function() {
  const sound = "woof";
  return {
    talk: function() {
      console.log(sound);
    }
  };
};
const sniffles = dog();
sniffles.talk();

//Example 2

const User = function(state) {
  return {
    test1: function() {
      console.log(state.name);
    },
    test2: function() {
      console.log(state.nativePlace);
    }
  };
};

let people = User({ name: "Ashish", nativePlace: "Saharsa" });
people.test1();
people.test2();

//assign

let o1 = { name: { firstname: "Ashish", lastname: "Jain" } };
let o2 = { nativePlace: "Saharsa" };
let o3 = { profile: "Dev" };

let o = Object.assign({}, o1, o2, o3);
o.nativePlace = "Newplace";
console.log(o2);

let checkthis = {
  val: 23,
  fun: function() {
    console.log("a", this.val);
    return function() {
      console.log("b", this.val);
    };
  }
};

checkthis.fun()();


let arr = [1,2,3,4,5];
console.log(Object.keys(arr))


let obj = {a:1, b:2, c:3};
console.log({...obj, c:4})


// Prototypal inheritance
function Vehicle(make, model){
    this.make=make;
    this.model=model;
}
Vehicle.prototype.testFun = function(){
    console.log('from vehicle::',this)
}
function Car(){
    Vehicle.call(this)
    this.name = 'Maruti'
}
Car.prototype = Object.create(Vehicle.prototype)

