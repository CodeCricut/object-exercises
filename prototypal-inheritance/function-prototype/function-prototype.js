////////////////////////////////////////////////////////////////
//                     Changing "prototype"                   //
////////////////////////////////////////////////////////////////

// Starter code:

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// insert code on this line

alert(rabbit.eats); // true

// If we add the line
//      Rabbit.prototype = {}
// what will happen?
// answer: rabbit.eats = true; the prototype was defined before changing the value

// If we add the line
//      Rabbit.prototype.eats = false
// what will happen?
// answer: rabbit.eat will be false; it modifies the actual prototype function obj

// If we add the line
//      delete rabbit.eats
// what will happen?
// answer: no effect; delete only works on the object before the dot, not the whole prototype chain

// If we add the line
//      delete Rabbit.prototype.eats
// what will happen?
// answer: it will delete the property on the prototype obj

////////////////////////////////////////////////////////////////
//           Create an object with the same constructor       //
////////////////////////////////////////////////////////////////
// ignore this
let obj = {};

// Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know
// which one, but we’d like to create a new object using it.

// can we do it like this?
// let obj2 = new obj.constructor();

// answer: in some cases. The constructor has to be a valid cosntructor function

// here is a valid case:
function Obj() {
    this.key1 = "val1";
}
obj = new Obj(); // obj.prototype.constructor = Obj

obj2 = new obj.constructor();
// also works
let obj3 = new obj.__proto__.constructor();

// invalid case:
Obj.prototype = {};

let newObj = new Obj(); // constructor = null
let newObjFromCons = new newObj.constructor();
console.dir(newObjFromCons.name); // undefined
