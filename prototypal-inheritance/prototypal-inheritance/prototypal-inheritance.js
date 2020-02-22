////////////////////////////////////////////////////////////////
//                   Working with prototype                   //
////////////////////////////////////////////////////////////////

// Here's the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // ? (1)

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2)

delete animal.jumps;

alert(rabbit.jumps); // ? (3)

// 1. true; it will first look in the rabbit object
// 2. null; it will look in the animal parent since rabbit.jumps is undefined
// 3. undefined; there is no rabbit.jumps or animal.jumps

////////////////////////////////////////////////////////////////
//                      Searching algorithm                   //
////////////////////////////////////////////////////////////////

// Given the following objects:

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

// Use __proto__ to make the inheritance tree pockets-->bed-->table-->head

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

////////////////////////////////////////////////////////////////
//                    Where does it write?                    //
////////////////////////////////////////////////////////////////

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

// answer: rabbit; 'this' refers to whatever was before the dot

////////////////////////////////////////////////////////////////
//                Why are both hamsters full?                 //
////////////////////////////////////////////////////////////////

// When we feed one hamster, the other one is also full. Why? How can we fix it?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple

// answer: 'this' will refer to the unique hamster, but the stomach is undefined on the unique hamsters.
// Because of that fact, it will go up the inheritance chain and modify the stomach in hamster.
// To put it simply, they share a stomach
