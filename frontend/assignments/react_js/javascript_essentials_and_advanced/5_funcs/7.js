// 7.
// Rewrite the following function as an arrow function: function formatFollowers(count) { if(count >= 1000) { return
// (count/1000).toFixed(1) + 'K'; } return count; }

formatFollowers = (count) => { if (count >= 1000) return (count / 1000).toFixed(1) + 'K'; }
console.log(formatFollowers(12345))