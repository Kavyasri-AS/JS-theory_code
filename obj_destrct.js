//object destructuring
const person = {
    name: "moni",
    age: 20
}

// Accessing a property directly
console.log(person.name)
    // Destructuring the object
const { name, age } = person
console.log(name)
console.log(age)
    // Object destructuring
const person = {
    name: "lynna",
    age: 20,
    salary: 40000
};
// Destructuring the object
const { name, age, salary } = person;
// Combining string interpolation and destructuring
console.log(`My name is ${name}, I am ${age} years old, and I earn ₹${salary.toLocaleString()} per month.`);
