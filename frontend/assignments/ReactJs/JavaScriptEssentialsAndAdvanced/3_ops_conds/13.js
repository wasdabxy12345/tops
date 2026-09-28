function isTruthy(input) {
    return input ? 'truthy' : 'falsy'
}

console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(null))
console.log(isTruthy('hello'))
console.log(isTruthy(42))