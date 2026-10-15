// 8.
// Remove the last playlist from your playlists array using the pop() method and display the removed object in the
// console.

const playlists = [
    { name: 'abc', creator: 'qaz', numberOfSongs: 12 },
    { name: 'def', creator: 'wsx', numberOfSongs: 13 },
    { name: 'ghi', creator: 'edc', numberOfSongs: 22 },
];

const removedPlaylist = playlists.pop();

console.log("Removed playlist:", removedPlaylist);
console.log("Updated playlists array:", playlists);