// Callback functions demonstrating asynchronous features
function dogWalk(callback) {
    setTimeout(() => {
        console.log("The dog walk has been completed");
        callback(); // Proceed to the next task
    }, 3000); // 5000 milliseconds = 5 seconds
}

function takeTrash(callback) {
    setTimeout(() => {
        console.log("Waste put in dustbin");
        callback(); // Proceed to the next task
    }, 4000); // 5000 milliseconds = 5 seconds
}

function cookingFood(callback) {
    setTimeout(() => {
        console.log("Food is cooked");
        callback(); // Signal completion
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Calling the functions in sequence using callback hell
dogWalk(() => {
    takeTrash(() => {
        cookingFood(() => {
            console.log("All tasks are completed");
        });
    });
});
