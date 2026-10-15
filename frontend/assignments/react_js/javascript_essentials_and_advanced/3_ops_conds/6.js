// 6.
// Write a function isEligibleForDiscount(totalAmount) that returns true if the totalAmount is greater than or equal to
// 500, otherwise false. Test it with values 300 and 700.

function isEligibleForDiscount(totalAmount) {
    return totalAmount >= 500 ? true : false
}

console.log(isEligibleForDiscount(300))
console.log(isEligibleForDiscount(700))