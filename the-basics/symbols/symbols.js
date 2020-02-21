////////////////////////////////////////////////////////////////
//                      Hello, Symbol                         //
////////////////////////////////////////////////////////////////

// Create a new empty Symbol (unique identifier)
let id = Symbol();

// Create a new symbol with a description
let idMessage = Symbol("description");

console.log(idMessage.description);

////////////////////////////////////////////////////////////////
//                     Hidden properties                      //
////////////////////////////////////////////////////////////////

let obj = {
    id: "1234"
};

// Create a property you can access with obj[id] that is not equal to obj.id
// Invalid: let obj.id = "new prop"

let newId = Symbol("id");
obj[newId] = "new prop";

console.log(obj.id);
console.log(obj[newId]);

// Create an object using object literal syntax with a symbol property

let objWithSym = {
    key1: "val1",
    // you must put the symbol in brackets
    [newId]: "wowowow",
    key3: "val2"
};

// What will this for..in loop output?
for (let key in objWithSym) console.log(key);

// answer: [ key1, key3 ] (symbols are skipped)

// Create a clong of objWithSym that includes the symbol property

let clone = Object.assign({}, objWithSym);

clone[newId]; // wowowow

////////////////////////////////////////////////////////////////
//                        Global Symbols                      //
////////////////////////////////////////////////////////////////

// If you would like to create a symbol that can be accessed anywhere, including other scripts,
// you can use the global symbol registry.

//                  Creating and reading global symbols:

// read from the global registry using Symbol.for
let id = Symbol.for("id key"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

//                  Reading global symbol keys

// read the key (like a description/name) for [id]
let idName = Symbol.keyFor(id); // "id key"
