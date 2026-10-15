// 8.
// Create an array called playlist with 4 song names (strings). Use a do-while loop to print each song name along with
// its index (e.g., '0: Kesariya') in the console.

let instagramUsernames = ['like', 'Instagram', 'Zomato', 'Paytm']

i = 0
do {
    console.log(`${i}: ${instagramUsernames[i]}`)
    i++
} while (i < instagramUsernames.length);