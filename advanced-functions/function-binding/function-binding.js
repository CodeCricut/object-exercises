////////////////////////////////////////////////////////////////
//                 Bound function as a method                 //
////////////////////////////////////////////////////////////////
// What will be the output?
function f() {
    alert(this); // ?
}
let user = {
    g: f.bind(null)
};
user.g();
// output: null; since you bind null to f, 'this' will refer to it within the user context
////////////////////////////////////////////////////////////////
//                         Second bind                        //
////////////////////////////////////////////////////////////////
// Can we change this by additional binding? What will be the output?
function f() {
    alert(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
f();
// output: john; you can only bind once
////////////////////////////////////////////////////////////////
//                Function property after bind                //
////////////////////////////////////////////////////////////////
// There’s a value in the property of a function. Will it change after bind? Why, or why not?
function sayHi() {
    alert(this.name);
}
sayHi.test = 5;
let bound = sayHi.bind({
    name: "John"
});
alert(bound.test); // what will be the output? why?
// output: undefined; the bound object is a new object, and won't remember previous properties
////////////////////////////////////////////////////////////////
//              Fix a function that loses "this"              //
////////////////////////////////////////////////////////////////
// The call to askPassword() in the code below should check the password and then call
// user.loginOk/loginFail depending on the answer.
// Why does it lead to an error?
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}
user = {
    name: "John",
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};
// askPassword(user.loginOk, user.loginFail);
// answer: the functions are not bound to the object
// fixed:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
////////////////////////////////////////////////////////////////
//               Partial application for login                //
////////////////////////////////////////////////////////////////
// The user object was modified. Now instead of two functions loginOk/loginFail,
// it has a single function user.login(true/false).
// What should we pass askPassword in the code below, so that it calls
// user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

user = {
    name: "John",

    login(result) {
        alert(this.name + (result ? " logged in" : " failed to log in"));
    }
};

askPassword(
    () => user.login(true),
    () => user.login(false)
); // ?
