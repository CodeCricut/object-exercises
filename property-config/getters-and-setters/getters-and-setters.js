////////////////////////////////////////////////////////////////
//              Getters and setters in object literal         //
////////////////////////////////////////////////////////////////

// get and set are special accessor properties

// define a getter and setter for a property named yooo

let myObj = {
    // _yooo is an invisible internal property
    get yooo() {
        console.log(`getting yooo: ${this._yooo}`);
    },
    set yooo(value) {
        console.log(`setting yooo to ${value}`);
        this._yooo = value;
    }
};

myObj.yooo = "new value"; // setting yooo to new value
myObj.yooo; // getting yooo: new value

////////////////////////////////////////////////////////////////
//                     Accessor descriptors                   //
////////////////////////////////////////////////////////////////

// Like regular properties, accessor properties have descriptors.
// They have slightly different flags: get, set, enumerable, and configurable

let user = {
    firstName: "your",
    lastName: "mom"
};

Object.defineProperty(user, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
});

console.log(user.fullName); // your mom

user.fullName = "eat pant";
console.log(user.fullName); // eat pant
