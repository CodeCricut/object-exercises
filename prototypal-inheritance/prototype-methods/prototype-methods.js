////////////////////////////////////////////////////////////////
//                Add toString to the dictionary              //
////////////////////////////////////////////////////////////////

// here’s an object dictionary, created as Object.create(null), to store any key/value pairs.

// Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.

let dictionary = Object.create(null);

// your code to add dictionary.toString method
dictionary.toString = function() {
    return Object.keys(this).join();
};

Object.defineProperty(dictionary, "toString", {
    enumerable: false
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"

////////////////////////////////////////////////////////////////
//                The difference between calls                //
////////////////////////////////////////////////////////////////

// starter:
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// what is the result of each of these calls?
rabbit.sayHi(); // "Rabbit"; 'this' is the rabbit
Rabbit.prototype.sayHi(); // undefined; 'this' is the Rabbit function
Object.getPrototypeOf(rabbit).sayHi(); // undefined; 'this' refers to the Rabbit function/prototype
rabbit.__proto__.sayHi(); // undefined; 'this' refers tot he prototype
