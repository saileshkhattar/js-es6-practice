const cart =(cart)=>{
    const total = cart.reduce((acc, n)=> acc + n.quantity*n.price, 0);
    
    return {"total": total, "subtotal" : total>1000? total - total*(1/10):total, "discount" : total>1000?total*(1/10):0}
}

const cartitems = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

console.log("Dsdsd")
let final_output = cart(cartitems);

console.log(final_output);