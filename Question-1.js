const dataTransformer = (users) => {
    return users.filter(user => user.age >= 18).map(user => `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}.`);
};

const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 17, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 30, email: "charlie@example.com" },
    { id: 4, name: "David", age: 16, email: "david@example.com" },
    { id: 5, name: "Eve", age: 22, email: "eve@example.com" }
];

const filter = dataTransformer(users);

console.log(filter);