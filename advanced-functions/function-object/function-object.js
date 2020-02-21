////////////////////////////////////////////////////////////////
//                  Set and decrease for counter              //
////////////////////////////////////////////////////////////////

// Create a function makeCounter() so that the counter can also decrease and set the number:
//      counter() should return the next number (as before).
//      counter.set(value) should set the counter to value.
//      counter.decrease() should decrease the counter by 1.

function makeCounter(ini = 0) {
    let count = ini;
    function counter() {
        // the function will remember the environment it was made in
        return count++;
    }
    counter.set = function(val) {
        count = val;
    };
    counter.decrease = function() {
        count--;
    };
    return counter;
}

let counter = makeCounter();
counter();
counter.set(69);
counter.decrease();

////////////////////////////////////////////////////////////////
//           Sum for an arbitraty amount of brackets          //
////////////////////////////////////////////////////////////////

// Write function sum that would work like this: sum(1)(23)(1) = 1 + 23 + 1 = 25

// let sum = function func(val) {
//     console.log(func);
//     func.count += val;
//     return func;
// };

// sum.count = 0;

function sum(a) {
    let currentVal = a;
    function f(b) {
        currentVal += b;
        return f;
    }

    f.toString = function() {
        return currentVal;
    };

    return f;
}

console.log(sum(1)(2));

////////////////////////////////////////////////////////////////
//            Print call stack of multiple functions          //
////////////////////////////////////////////////////////////////

// my idea: create a function callStack that takes a string. You should be able to call
// it like callStack("hello")("world"), and it should return ["hello", "world"]

function callStack(a) {
    let callStack = [a];
    function f(b) {
        callStack.push(b);
        return f;
    }

    f.toString = function() {
        return callStack.toString();
    };

    return f;
}

let arr = callStack("hello")("world")("how's")("it")("going")(21);
console.log(arr);
