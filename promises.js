//instead of callback hell we use promises
function dogWalk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walk = true; // Change to false to simulate failure
            if (walk) {
                resolve("The dog walk has been completed");
            } else {
                reject("The dog refused to walk");
            }
        }, 3000); // 3 seconds delay
    });
}

function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash = true; // Change to false to simulate failure
            if (trash) {
                resolve("Waste put in dustbin");
            } else {
                reject("Failed to take out the trash");
            }
        }, 4000); // 4 seconds delay
    });
}

function cookingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const food = true; // Change to false to simulate failure
            if (food) {
                resolve("Food is cooked");
            } else {
                reject("Cooking failed");
            }
        }, 5000); // 5 seconds delay
    });
}

// Chaining Promises for sequential execution with error handling
dogWalk()
    .then((message) => {
        console.log(message); // Log success message for dogWalk
        return takeTrash(); // Proceed to the next task
    })
    .then((message) => {
        console.log(message); // Log success message for takeTrash
        return cookingFood(); // Proceed to the next task
    })
    .then((message) => {
        console.log(message); // Log success message for cookingFood
        console.log("All tasks are completed");
    })
    .catch((error) => console.error(`Error: ${error}`)); // Handle any rejection
//.then-->sucess    .catch-->failure
