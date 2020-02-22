"use strict";
////////////////////////////////////////////////////////////////
//                  getOwnPropertyDescriptor                  //
////////////////////////////////////////////////////////////////

// what will the following code output?

let myObj = {
    key1: "val1",
    key2: "val2"
};

console.log(Object.getOwnPropertyDescriptor(myObj, "key1"));

// answer: it will output the property descriptor for the key1 property. That includes the value and the
// writable, enumerable, and configurable flags. All are true by default.

////////////////////////////////////////////////////////////////
//               Make a property non-writable                 //
////////////////////////////////////////////////////////////////

// make the key2 property of myObj. What wil happen when you try to reassign it?

Object.defineProperty(myObj, "key2", {
    writable: false
});

// myObj.key2 = "new val"; // error on strict mode, no effect otherwise

////////////////////////////////////////////////////////////////
//               Make a property non-enumerable               //
////////////////////////////////////////////////////////////////

// make the toString property non-enumerable. What does it mean to be non-enumerable?

myObj.toString = () => "awesome obj";

Object.defineProperty(myObj, "toString", {
    enumerable: false
});

// non-enumerable means it won't show up in a for..in loop
for (let prop in myObj) {
    console.log(prop);
}

////////////////////////////////////////////////////////////////
//              Make a property non-configurable              //
////////////////////////////////////////////////////////////////

// make the key1 property non-configurable. What does it mean to be non-configurable?

Object.defineProperty(myObj, "key1", {
    configurable: false
});

// answer: a non-configurable property restricts the property definition.
// the prop cannot be deleted, and we can't change the flags (with some exceptions)

myObj.key1 = "new val"; // all good

/*
Object.defineProperty(myObj, "key1", {
    configurable: true, // error
    enumerable: false, // error
    writable: false // not an error---you can change writable from true to false, but not the other way around
});

delete myObj.key1;
*/

////////////////////////////////////////////////////////////////
//                     Seal an object globally                //
////////////////////////////////////////////////////////////////

// There are lots of ways to alter the property descriptors for every property on an object
// Here they are:

// Object.preventExtensions(obj)
//          Forbids the addition of new properties to the object.
// Object.seal(obj)
//          Forbids adding/removing of properties. Sets configurable: false for all existing properties.
// Object.freeze(obj)
//          Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

// And also there are tests for them:

// Object.isExtensible(obj)
//          Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
//          Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
//          Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
