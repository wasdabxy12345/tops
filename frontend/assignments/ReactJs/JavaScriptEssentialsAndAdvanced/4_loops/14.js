// 14.
// Create an array of your 5 most-used WhatsApp contacts (just names as strings). Use the forEach method to print a
// message for each: 'Sending hi to [name] on WhatsApp!'.<br><br><em><strong>Hint:</strong> Use an arrow function as the
// callback for forEach.</em>

mostUsedWAContacts = ['abc', 'def', 'ghi', 'jkl', 'mno']

mostUsedWAContacts.forEach(element => {
    console.log(`Sending hi to ${element} on WhatsApp!`)
});