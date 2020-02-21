////////////////////////////////////////////////////////////////
//                 Two functions - one object                 //
////////////////////////////////////////////////////////////////

// Is it possible to create functions A and B such as new A()==new B()?

function A() {
    /* code here */
}
function B() {
    /* code here */
}

let a = new A();
let b = new B();

alert(a == b); // true

// answer: yes. you could return an equivalent object---a constructor function will return
// a value other than 'this' if that value is an object

////////////////////////////////////////////////////////////////
//                      Create new Calculator                 //
////////////////////////////////////////////////////////////////

// Create a constructor function Calculator that creates objects with 3 methods:
//      read() asks for two values using prompt and remembers them in object properties.
//      sum() returns the sum of these properties.
//      mul() returns the multiplication product of these properties.

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?");
        this.b = +prompt("b?");
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

////////////////////////////////////////////////////////////////
//                      Create new Accumulator                //
////////////////////////////////////////////////////////////////

// Create a constructor function Accumulator(startingValue).
//      Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//      The read() method should use prompt to read a new number and add it to value.

function Accumulator(ini) {
    this.value = ini;
    this.read = function() {
        this.value += +prompt("enter a number");
    };
}

let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values
