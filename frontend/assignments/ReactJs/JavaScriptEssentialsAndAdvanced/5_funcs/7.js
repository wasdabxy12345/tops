formatFollowers = (count) => { if (count >= 1000) return (count / 1000).toFixed(1) + 'K'; }
console.log(formatFollowers(12345))