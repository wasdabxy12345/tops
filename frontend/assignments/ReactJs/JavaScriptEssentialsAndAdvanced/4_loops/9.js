// 9.
// Use a do-while loop to simulate a Zomato order tracker that prints 'Order status: Preparing', 'Order status: Out for
// delivery', and 'Order status: Delivered' in sequence, stopping after the last status.

let orderStatus = ['Preparing', 'Out for delivery', 'Delivered']

i = 0
do {
    console.log(`Order status: ${orderStatus[i]}`)
    i++
} while (i < orderStatus.length);