// 13.
// Create an array called orders, where each order is an object with properties: orderId, items (an array of objects
// with itemName and price), and delivery (an object with address and status). Write a loop to display each order's
// orderId and total price of all items. Hint: Use a nested loop or array method to sum the prices inside each order.

const orders = [
  {
    orderId: 101,
    items: [
      { itemName: "abc", price: 100 },
      { itemName: "def", price: 122 },
      { itemName: "ghi", price: 212 },
    ],
    delivery: { address: "1, qaz", status: "delivered" },
  },
  {
    orderId: 122,
    items: [
      { itemName: "jkl", price: 311 },
      { itemName: "mno", price: 123 },
    ],
    delivery: { address: "2, wsx", status: "pending" },
  },
  {
    orderId: 123,
    items: [{ itemName: "pqr", price: 312 }],
    delivery: { address: "3, edc", status: "shipped" },
  },
];

orders.forEach((order) => {
  let total = 0;
  order.items.forEach((item) => {
    total += item.price;
  });
  console.log(`order id: ${order.orderId}, total price: ${total}`);
});