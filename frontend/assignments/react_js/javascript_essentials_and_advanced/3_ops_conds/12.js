// 12.
// Given a variable username, write a condition that checks if username is truthy, and if so, logs 'Welcome,
// [username]!', otherwise logs 'Guest Login'.<br><br><em><strong>Hint:</strong> Try with username = '', username =
// null, and username = 'Priya'.</em>

let username

username = ''
console.log(username ? `Welcome, ${username}` : 'Guest Login')

username = null
console.log(username ? `Welcome, ${username}` : 'Guest Login')

username = 'Priya'
console.log(username ? `Welcome, ${username}` : 'Guest Login')