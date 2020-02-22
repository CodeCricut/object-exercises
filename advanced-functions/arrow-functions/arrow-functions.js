////////////////////////////////////////////////////////////////
//                       No 'this' nested                     //
////////////////////////////////////////////////////////////////

// What will 'this' refer to inside this forEach function?

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(student => alert(this.title + ": " + student));
    }
};

group.showList();

// answer: group; arrow functions have no 'this', so it will derive its value from the outer function

////////////////////////////////////////////////////////////////
//                       No 'this' global                     //
////////////////////////////////////////////////////////////////

// What will 'this' refer to inside this forEach function?

let arr = ["yo", "i", "like", "you", "pls", "lemme", "smash"];

arr.forEach(item => console.log(this));

// answer: the global object/the window.

////////////////////////////////////////////////////////////////
//                Constructor arrow function                  //
////////////////////////////////////////////////////////////////

let MyObj = () => {
    this.x = "value";
};

// let myObj = new MyObj();

// answer: error: MyObj is not a constructor

////////////////////////////////////////////////////////////////
//                  Arrow function arguments                  //
////////////////////////////////////////////////////////////////

// What will happen when you run the function?
let printAllArgs = () => {
    for (let arg of arguments) {
        console.log(arg);
    }
};

// printAllArgs("yo", "what's", "up?");

// answer: error: arguments is undefined in an arrow function
