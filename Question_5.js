
/*
Question 5: Promise Chains vs Async/Await
File: question5.js
Difficulty: Medium
Focus: Understanding different async patterns

Implement the same order processing workflow using both promise chains and async/await to understand their differences.

// These functions simulate order processing steps
function validateOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} validated`);
            resolve(`Order ${orderId} validated`);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for order ${orderId}`);
            resolve(`Payment processed for order ${orderId}`);
        }, 2000);
    });
}

function shipProduct(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} shipped`);
            resolve(`Order ${orderId} shipped`);
        }, 1000);
    });
}
Tasks:

Implement processOrderWithPromises(orderId) using .then() chains
Implement processOrderWithAsync(orderId) using async/await
Call both and compare their behavior
Requirements:

Both should produce identical output
Add comments explaining the differences
Discuss when you might prefer one approach over the other
*/

function validateOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} validated`);
            resolve(`Order ${orderId} validated`);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for order ${orderId}`);
            resolve(`Payment processed for order ${orderId}`);
        }, 2000);
    });
}

function shipProduct(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} shipped`);
            resolve(`Order ${orderId} shipped`);
        }, 1000);
    });
}


async function processOrderWithAsync(orderId){
    await validateOrder(orderId);
    await processPayment(orderId);
    await shipProduct(orderId);
}

processOrderWithAsync(1);

function processOrderWithPromises(orderId){
    return validateOrder(orderId)
    .then(processPayment)
    .then(shipProduct)
    .catch(console.error)
}

processOrderWithPromises(1);






