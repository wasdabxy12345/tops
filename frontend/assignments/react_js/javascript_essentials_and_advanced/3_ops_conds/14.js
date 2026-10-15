// 14.
// Write a function isTruthy(input) that takes any value and returns 'Truthy' or 'Falsy' based on JavaScript's
// truthy/falsy evaluation. Test it with '', 0, null, 'hello', and 42.<br><br><em><strong>Constraint:</strong> Do not
// use if-else; use the ternary operator.</em>

function isTruthy(input) {
    return input ? 'truthy' : 'falsy'
}

console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(null))
console.log(isTruthy('hello'))
console.log(isTruthy(42))