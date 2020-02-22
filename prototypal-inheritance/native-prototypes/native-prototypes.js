////////////////////////////////////////////////////////////////
//            Add method "f.defer(ms)" to functions           //
////////////////////////////////////////////////////////////////

// Add to the prototype of all functions the method defer(ms), that runs the
// function after ms milliseconds.

Function.prototype.defer = function(ms) {
    setTimeout(() => this.apply(this, arguments), ms);
};

function f(arg) {
    console.log("hello", arg);
}

f.defer(1000);

////////////////////////////////////////////////////////////////
//         Add the decorating "defer()" to functions          //
////////////////////////////////////////////////////////////////

// Add to the prototype of all functions the method defer(ms), that returns
// a wrapper, delaying the call by ms milliseconds. It should work like f.defer(1000)(arg1, arg2, ...)

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};

f.defer(1000)("there"); // hello, there

// with an object:
let obj = {
    brand: "levi",
    eatPant() {
        console.log(`im eating ${this.brand}s`);
    }
};

obj.eatPant = obj.eatPant.defer(1000); // the returned function has f = eatPant, and this
// will refer to the object before the function call

obj.eatPant(); // this = obj; "im eating levis"

let newObj = {
    brand: "wrangler"
};

newObj.eatPant = obj.eatPant.defer(2000);
newObj.eatPant(); // this = newObj; "im eating wranglers"
