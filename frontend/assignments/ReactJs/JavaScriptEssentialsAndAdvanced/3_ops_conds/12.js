let username

username = ''
console.log(username ? `Welcome, ${username}` : 'Guest Login')

username = null
console.log(username ? `Welcome, ${username}` : 'Guest Login')

username = 'Priya'
console.log(username ? `Welcome, ${username}` : 'Guest Login')