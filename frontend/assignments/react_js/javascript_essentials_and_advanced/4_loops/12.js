// 12.
// Given an array of Flipkart product prices, use a for-of loop to calculate and print the total price of all products.

let flipkartProductPrices = [111, 222, 333], totalPrice = 0

for (const element of flipkartProductPrices) {
    totalPrice += element
}

console.log(totalPrice)