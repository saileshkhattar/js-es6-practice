/*
Question 6: Refactoring Callback Hell
File: question6.js
Difficulty: Medium to Hard
Focus: Converting callbacks to async/await

Take the nested callback code below and refactor it to use promises and async/await.

// Original callback-based code
function makePizza(callback) {
    console.log("Starting pizza preparation...");
    
    setTimeout(() => {
        console.log("Preparing base...");
        setTimeout(() => {
            console.log("Adding sauce...");
            setTimeout(() => {
                console.log("Adding cheese and toppings...");
                setTimeout(() => {
                    console.log("Baking pizza...");
                    setTimeout(() => {
                        callback("Pizza is ready!");
                    }, 2000);
                }, 3000);
            }, 1000);
        }, 1000);
    }, 1000);
}

makePizza((result) => {
    console.log(result);
});
Your tasks:

Convert each step to return a promise
Create an async function that uses await for each step
Keep the same timing and console output
Return the final result
Requirements:

Create separate promise-returning functions for each step
Use async/await in the main function
Maintain the original timing (1s, 1s, 1s, 3s, 2s)
Keep all console.log statements
*/

const preparebase = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Preparing Base.....")
            resolve()
        }, 1000)
    })
}


const addbase = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Adding Sauce.....")
            resolve()
        }, 1000)
    })
}

const addcheeseandtoppings = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Adding Cheese and Toppings.....")
            resolve()
        }, 1000)
    })
}

const bakepizza = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Baking Pizza.....")
            resolve()
        }, 3000)
    })
}

const pizzaready = function(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            callback("Pizza Ready....")
        }, 2000)
    })
}

async function makePizza(callback){
    await preparebase()
    await addbase()
    await addcheeseandtoppings()
    await bakepizza()
    await pizzaready(callback)
}

makePizza(console.log)


