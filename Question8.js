/*
Question 8: Parallel vs Sequential Execution
File: question8.js
Difficulty: Medium to Hard
Focus: Understanding async performance

Compare sequential and parallel execution of async operations.

// API simulation functions - don't modify
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched user ${id}`);
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

function getUserHobbies(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched hobbies for user ${id}`);
            resolve(["Reading", "Coding", "Gaming"]);
        }, 1000);
    });
}

function getUserFriends(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched friends for user ${id}`);
            resolve([{ id: 2, name: "Friend1" }, { id: 3, name: "Friend2" }]);
        }, 1000);
    });
}
Tasks:

Create fetchSequentially(userId) - fetch one after another
Create fetchInParallel(userId) - fetch all at once
Measure and compare execution times
Requirements:

Use async/await for sequential
Use Promise.all() for parallel
Use console.time() and console.timeEnd()
Return combined data: { user, hobbies, friends }
Explain when to use each approach
Expected times:

Sequential: about 3 seconds
Parallel: about 1 second
*/

console.time("Sequentially");

function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched user ${id}`);
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

function getUserHobbies(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched hobbies for user ${id}`);
            resolve(["Reading", "Coding", "Gaming"]);
        }, 1000);
    });
}

function getUserFriends(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched friends for user ${id}`);
            resolve([{ id: 2, name: "Friend1" }, { id: 3, name: "Friend2" }]);
        }, 1000);
    });
}

async function fetchSequentially(id){
    await getUser(id);
    await getUserHobbies(id);
    await getUserFriends(id);

    console.timeEnd("Sequentially");
}


fetchSequentially(1)



function fetchInParallel(id){
    console.time("Parallel")
    Promise.all([
        getUser(id),
        getUserFriends(id),
        getUserHobbies(id)
        ]).then(()=>
            console.timeEnd("Parallel")
        )
    }

fetchInParallel(1);

