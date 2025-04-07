class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class's constructor
        this.breed = breed; // Assign the breed property
    }
    speak() {
        console.log(`${this.name} barks.`); // Added space for proper formatting
    }
}

// Create an instance of the Dog class and test
const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak();
// Output:
// Buddy barks.
console.log(`Breed: ${dog1.breed}`);
// Output:
// Breed: Golden Retriever
