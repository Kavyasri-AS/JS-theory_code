function scope() {
//console.log(a) // would give undefined due to hoisting
if (true) {
    var a = 10; // var is function-scoped, not block-scoped
}
a = 20;
console.log(a); // prints 20
}

function sample() {
    console.log("hello world");
}

scope();

let hello = () => {
    console.log("by arrow function");
};

sample(); // prints "hello world"
hello(); // prints "by arrow function"
