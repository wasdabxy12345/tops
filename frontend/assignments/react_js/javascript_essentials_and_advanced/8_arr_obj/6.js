// 6.
// Use the push() method to add a new playlist object to your playlists array with your favorite genre. Then, use pop()
// to remove the last playlist and log the updated array after each operation.

const playlists = [
    { name: 'abc', creator: 'qaz', numberOfSongs: 12 },
    { name: 'def', creator: 'wsx', numberOfSongs: 13 },
    { name: 'ghi', creator: 'edc', numberOfSongs: 22 },
];

playlists.push(
    { name: 'jkl', creator: 'rfv', numberOfSongs: 23, genre: 'Rock' }
);
console.log("After push:", playlists);

playlists.pop();
console.log("After pop:", playlists);