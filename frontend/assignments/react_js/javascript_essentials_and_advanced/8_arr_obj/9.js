// 9.
// Build an array called cart containing 4 objects, each representing a Flipkart product with properties: productName,
// price, and quantity. Write a loop to display each product's name and total price (price × quantity) in the console.

const cart = [
    { productName: 'abc', price: 12, quantity: 12 },
    { productName: 'def', price: 13, quantity: 13 },
    { productName: 'ghi', price: 22, quantity: 22 },
    { productName: 'jkl', price: 1232, quantity: 123 },
];

cart.forEach(element => {
    console.log(`name: ${element.productName}, total price: ${element.price * element.quantity}`);
});