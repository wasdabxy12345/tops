// 10.
// Use the splice() method to remove the second playlist from your playlists array and insert a new playlist at that
// position. Print the resulting array. Hint: splice(startIndex, deleteCount, newItem) can both remove and add in one
// call.

const playlists = [
    { name: 'abc', creator: 'qaz', numberOfSongs: 12 },
    { name: 'def', creator: 'wsx', numberOfSongs: 13 },
    { name: 'ghi', creator: 'edc', numberOfSongs: 22 },
];

playlists.splice(1, 1, { name: 'jkl', creator: 'rfv', numberOfSongs: 123 });

console.log(playlists);