////////////////////////////////////////////////////////////////
//                      Hello, object                         //
////////////////////////////////////////////////////////////////

// 1. Create an empty object user.
let user = {};
// 2. Add the property name with the value John.
user.name = "John";
// 3. Add the property surname with the value Smith.
user.surname = "Smith";
// 4. Change the value of the name to Pete.
user.name = "Pete";
// 5. Remove the property name from the object.
delete user.name;

////////////////////////////////////////////////////////////////
//                    Check for emptiness                     //
////////////////////////////////////////////////////////////////

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    // ES5 method
    // return Object.keys(obj).length;

    for (let key in obj) return false;
    return true;
}

////////////////////////////////////////////////////////////////
//                      Constant objects?                     //
////////////////////////////////////////////////////////////////

// Is it possible to change an object declared with const? What do you think?

const user1 = {
    name: "John"
};

// does it work?
user1.name = "Pete";

// Yes. You can change a property of a constant as long as you don't reassign the variable. You could not do this vvv
// user = null;

////////////////////////////////////////////////////////////////
//                    Sum object properties                   //
////////////////////////////////////////////////////////////////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
function propertySum(obj) {
    let sum = 0;
    for (let key in obj) sum += obj[key];

    // alternate:
    // for (let value of Object.values(obj)) sum += value;

    return sum;
}

////////////////////////////////////////////////////////////////
//                Multiply numeric properties by 2            //
////////////////////////////////////////////////////////////////

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
