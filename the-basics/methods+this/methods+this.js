////////////////////////////////////////////////////////////////
//                       Syntax Check                         //
////////////////////////////////////////////////////////////////

// What is the result of this code?
// let user = {
//     name: "John",
//     go: function() {
//         alert(this.name);
//     }
// }(user.go)();

// error: a missing semicolon squishes the object and method together. user.go is undefined at the point it is called

////////////////////////////////////////////////////////////////
//                 Explain the value of "this"                //
////////////////////////////////////////////////////////////////

// In the code below we intend to call obj.go() method 4 times in a row. Why are they different?

let obj, method;

obj = {
    go: function() {
        alert(this);
    }
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// 1. returns function() { alert(this); } then invokes it immediately
// 2. returns function() { alert(this); } then invokes it
// 3. it is equivalent to
//      method = obj.go;
//      method();
//      it is undefined because 'this' refers to whatever is before the dot. There is nothing before the dot.
// 4. similar to 3. It returns obj.go, but invoking it doesn't maintain the obj before the dot.

////////////////////////////////////////////////////////////////
//              Using "this" in an object literal             //
////////////////////////////////////////////////////////////////

// What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user1 = makeUser();

alert(user1.ref.name); // What's the result?

// user = { name: "John", ref: undefined }
// ref.name = ERROR

////////////////////////////////////////////////////////////////
//                       Create a calculator                  //
////////////////////////////////////////////////////////////////

// Create an object calculator with three methods:
//      read() prompts for two values and saves them as object properties.
//      sum() returns the sum of saved values.
//      mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt("Enter a", 0);
        this.b = +prompt("Enter b", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

////////////////////////////////////////////////////////////////
//                           Chaining                         //
////////////////////////////////////////////////////////////////

// There’s a ladder object that allows to go up and down:

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() {
        // shows the current step
        alert(this.step);
    }
};

// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

// Modify the code of up, down and showStep to make the calls chainable

ladder.up = function() {
    this.step++;
    return this;
};
ladder.down = function() {
    this.step--;
    return this;
};
ladder.showStep = function() {
    alert(this.step);
    return this;
};

// calls
ladder
    .up()
    .up()
    .up()
    .showStep();
