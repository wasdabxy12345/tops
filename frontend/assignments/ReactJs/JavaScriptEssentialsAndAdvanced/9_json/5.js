// 5.
// Write a function that takes a JSON string representing a list of favorite YouTube channels and returns an array of channel names using JSON.parse().

function jsonToArr(params) {
    return JSON.parse(params);
}

console.log(jsonToArr('["zomato", "swiggy", "dominos"]'));