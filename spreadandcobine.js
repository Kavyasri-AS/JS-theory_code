// array spreading
const name = ['john']
console.log(...name) //print outside array;
console.log(name)
const name1 = ['dany']
    // Combine the arrays and join with a hyphen
const combinedNames = [...name, ...name1].join('-');
console.log(combinedNames); // Output: john-dany
//object spreading-allow to copyproperties of an obj.
const person1 = { name: 'john' };
const person2 = { name: 'dany', age: 25 };
// Combine the objects using the spread operator
const combinedPerson = {...person1, ...person2 };
console.log(combinedPerson)
    // Traveler basic details
const travelerInfo = {
    name: 'Kavya',
    country: 'India'
};

// Travel preferences
const travelPreferences = {
    destination: 'Japan',
    modeOfTravel: 'Flight'
};

// Combine traveler info and preferences using object spreading
const travelerData = {
    ...travelerInfo,
    ...travelPreferences
};
console.log(travelerData);
