/*

Question 4: Async Data Fetcher with Error Handling
File: question4.js
Difficulty: Medium
Focus: Async/await, promises, error handling

You're given two functions that simulate API calls. Create a function that fetches both user data and posts, handling any errors that occur.

// These functions simulate API calls - don't modify them
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID"));
            }
            resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 2) {
                reject(new Error("Failed to fetch posts"));
            }
            resolve([
                { id: 1, title: "Post 1", userId },
                { id: 2, title: "Post 2", userId }
            ]);
        }, 1000);
    });
}
Your task: Write an async function getUserWithPosts(userId) that fetches both the user and their posts, combines them into a single object, and handles errors properly.

Test with:

userId 1 (should work)
userId 2 (posts will fail)
userId -1 (user will fail)
Requirements:

Use async/await
Use try-catch for error handling
Log meaningful messages
Return appropriate values on both success and failure
*/


function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID"));
            }
            resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 2) {
                reject(new Error("Failed to fetch posts"));
            }
            resolve([
                { id: 1, title: "Post 1", userId },
                { id: 2, title: "Post 2", userId }
            ]);
        }, 1000);
    });
}

async function getUserWithPosts(userId){
    try{
        let user = await fetchUser(userId)
        try{
            let posts = await fetchPosts(userId)
            return {"User":user, "Posts": posts};
        }catch(error){
            console.log(error.message)
            return {"User":user, "Posts": []};
        }
    }catch(error){
        console.log(error.message)
    }
} 

getUserWithPosts(2).then(console.log).catch(console.error);
getUserWithPosts(1).then(console.log).catch(console.error);
getUserWithPosts(-1).then(console.log).catch(console.error);