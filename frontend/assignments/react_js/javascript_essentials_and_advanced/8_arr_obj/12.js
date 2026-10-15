// 12.
// Given an array of objects called movies, where each object has properties: title, year, and a nested object rating
// with keys imdb and rottenTomatoes, write code to print each movie's title and its IMDb rating.

const movies = [
    { title: 'abc', year: 2000, rating: { imdb: 5.2, rottenTomatoes: 10 } },
    { title: 'def', year: 1999, rating: { imdb: 6.2, rottenTomatoes: 22 } },
    { title: 'ghi', year: 2012, rating: { imdb: 7.2, rottenTomatoes: 33 } },
];

movies.forEach(element => {
    console.log(`title: ${element.title}, imdb: ${element.rating.imdb}`);
});