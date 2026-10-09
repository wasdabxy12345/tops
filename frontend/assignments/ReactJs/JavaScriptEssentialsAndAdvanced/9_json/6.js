// 6.
// Build a function saveRecentSearch(query) that takes a search term (like 'Biryani' or 'Sneakers'), adds it to an
// array, converts the array to JSON, and saves it in localStorage under the key 'recentSearches'.

let arr = [];

function saveRecentSearch(query) {
  arr.push(query);
  localStorage.setItem("recentSearches", JSON.stringify(arr));
}
