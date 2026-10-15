// 11.
// Given an array of objects representing Flipkart products (each with name and price), use a for-of loop to print only
// the product names.

let flipkartProducts = [
    { name: 'abc', price: 111 },
    { name: 'def', price: 222 },
    { name: 'ghi', price: 333 },
]

for (const element of flipkartProducts) {
    console.log(element.name)
}