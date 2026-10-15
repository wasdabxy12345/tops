// 15.
// Create an array called favApps with 5 objects, each having title and url. Use splice() to remove the third app and
// insert a new app object for your most-used app at that position. Log the final array.

const favApps = [
  { title: "abc", url: "abc.com" },
  { title: "def", url: "def.com" },
  { title: "ghi", url: "ghi.com" },
  { title: "jkl", url: "jkl.com" },
  { title: "mno", url: "mno.com" },
];

favApps.splice(2, 1, { title: "pqr", url: "pqr.com" });

console.log(favApps);