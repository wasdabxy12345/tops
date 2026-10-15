// 4.
// Add a new playlist object to your playlists array using the push() method. The new playlist should have a unique
// name, creator, and numberOfSongs. Print the updated array.

const playlists = [
    { name: 'abc', creator: 'qaz', numberOfSongs: 12 },
    { name: 'def', creator: 'wsx', numberOfSongs: 13 },
    { name: 'ghi', creator: 'edc', numberOfSongs: 22 },
];

playlists.push({ name: 'jkl', creator: 'rfv', numberOfSongs: 23 });

console.log(playlists);