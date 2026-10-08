// 9.
// Build a function getBadge(followers) that returns 'Verified Creator ⭐' if followers is 1000 or more, otherwise
// returns 'Regular User'. Use the ternary operator to implement this logic.

function getBadge(followers) {
    return followers >= 1000 ? 'Verified Creator ⭐' : 'Regular User'
}

console.log(getBadge(10000000))