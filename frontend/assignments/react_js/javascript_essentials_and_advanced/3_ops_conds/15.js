// 15.
// Create a function canOrderFood(isLoggedIn, hasPaymentMethod) that returns true only if both isLoggedIn and
// hasPaymentMethod are true, using logical operators. Test your function with all possible combinations of true/false.

function canOrderFood(isLoggedIn, hasPaymentMethod) {
    return isLoggedIn && hasPaymentMethod ? true : false
}

console.log(canOrderFood(true, true))
console.log(canOrderFood(true, false))
console.log(canOrderFood(false, true))
console.log(canOrderFood(false, false))