/*
Question 9: Implementing Array Methods
File: question9.js
Difficulty: Hard
Focus: Deep understanding of how array methods work

Create your own implementations of common array methods.

Implement these on Array.prototype:

Array.prototype.myMap = function(callback) {
    // Your implementation
};

Array.prototype.myFilter = function(callback) {
    // Your implementation
};

Array.prototype.myReduce = function(callback, initialValue) {
    // Your implementation
};

Array.prototype.myFind = function(callback) {
    // Your implementation
};

Array.prototype.mySome = function(callback) {
    // Your implementation
};
Test with:

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.myMap(x => x * 2));           // [2, 4, 6, 8, 10]
console.log(numbers.myFilter(x => x > 3));        // [4, 5]
console.log(numbers.myReduce((acc, curr) => acc + curr, 0));  // 15
console.log(numbers.myFind(x => x > 3));          // 4
console.log(numbers.mySome(x => x > 3));          // true
Requirements:

Don't use the native array methods in your implementation
Use basic loops (for, while, for...of)
Handle edge cases (empty arrays, missing initial values, etc.)
Add clear comments
Match the behavior of native methods
Bonus: Implement myEvery() as well

*/

Array.prototype.myMap = function(callback) {
    let return_arr = [];
    for(let i=0; i<this.length;i++){
        return_arr.push(callback(this[i]));
    }
    return return_arr;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.myMap(x => x * 2));


Array.prototype.myFilter = function(callback) {
    let return_arr = [];
    for(let i=0; i<this.length;i++){
        if(callback(this[i])){
            return_arr.push(this[i])
        }
    }

    return return_arr;
};

console.log(numbers.myFilter(x=>x>3));

Array.prototype.myReduce = function(callback, initialValue) {
    if(initialValue == undefined) return "Plese Enter Initial Value"
    for(let i=0; i<this.length;i++){
        initialValue = callback(initialValue, this[i])
    }

    return initialValue
};

console.log(numbers.myReduce((acc, curr) => acc + curr, 0));

Array.prototype.myFind = function(callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            return this[i];
        }
    }
    return undefined;
};

console.log(numbers.myFind(x => x > 3)); 


Array.prototype.mySome = function(callback) {
      for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
};

console.log(numbers.mySome(x => x > 7));


