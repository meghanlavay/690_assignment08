//STEP 1
// let movies = ['True Romance', 'Pulp Fiction', 'The Shining', 'Empire Records', 'Lost in Translation'];
// console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies [0] = 'True Romance';
// movies [1] = 'Pulp Fiction';
// movies [2] = 'The Shining';
// movies [3] = 'Empire Records';
// movies [4] = 'Lost in Translation';

// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies [0] = 'True Romance';
// movies [1] = 'Pulp Fiction';
// movies [2] = 'The Shining';
// movies [3] = 'Empire Records';
// movies [4] = 'Lost in Translation';
// movies.splice(3, 0, 'Donnie Darko');
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';
// for (let movie in movies) {
//     console.log(movies[movie]);
//     }

//STEP 6
// let movies = [];
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';
// for (let i of movies) {
//     console.log(i);
//     }

//STEP 7
// let movies = [];
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';
// for (let i of movies.sort()) {
//     console.log(i);
//     }

//STEP 8
// let movies = []
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';

// let leastFavMovies = ['Birdemic', 'Glitter', 'Cabin Fever'];

// console.log('Movies I like:');
// console.log('');
// for (let i of movies) {
// console.log(i);
// }
// console.log('');
// console.log('Movies I regret watching:');
// console.log('');
// for (let x of leastFavMovies) {
// console.log(x);
// }

//STEP 9
// let movies = []
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';

// let leastFavMovies = ['Birdemic', 'Glitter', 'Cabin Fever'];

// movies = movies.concat(leastFavMovies);
// console.log((movies.sort()).reverse());

//STEP 10
// let movies = []
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';

// let leastFavMovies = ['Birdemic', 'Glitter', 'Cabin Fever'];

// movies = movies.concat(leastFavMovies);
// console.log(((movies.sort()).reverse()).pop());

//STEP 11
// let movies = []
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';

// let leastFavMovies = ['Birdemic', 'Glitter', 'Cabin Fever'];

// movies = movies.concat(leastFavMovies);
// console.log(((movies.sort()).reverse()).shift());

//STEP 12
// let movies = []
// movies[0] = 'True Romance';
// movies[1] = 'Pulp Fiction';
// movies[2] = 'The Shining';
// movies[3] = 'Empire Records';
// movies[4] = 'Lost in Translation';
// movies[5] = 'The Usual Suspects';
// movies[6] = 'Taxi Driver';

// let leastFavMovies = ['Birdemic', 'Glitter', 'Cabin Fever'];
// movies = movies.concat(leastFavMovies);

// movies.map((myMovies, index) => {
//     console.log(`${myMovies}, Index: ${index}`);
//   }) 
// movies.splice(7, 9, 'Requiem for a Dream','The Royal Tenenbaums','Mulholland Drive');
// console.log(movies);

// STEP 13
// movies = [['Lost in Translation', 1], ['True Romance', 2], ['Pulp Fiction', 3], ['Empire Records', 4], ['Taxi Driver', 5]];
// for (let movie of movies) {
//         let favorites = movie.filter((value) => {
//             return typeof value === "string";
//         });
//         console.log(favorites);
//     }

//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
// let showEmployee = function (arr) {
//     console.log('Employees:');
//     console.log('');
//     for (let employee of arr) {
//         console.log(employee.toUpperCase())
//     }
// }

// showEmployee(employees)

//STEP 15
// let filterData = (arr) => {
//         return arr.filter((value) => {
//             return (value !== false && value !== null && value != 0 && value != '')
//         });
// }
//     console.log(filterData([58, '', "abcd", true, null, false, 0]));

//STEP 16
// num = [1, 7, 4, 18, 34, 3, 67, 45, 12, 90];
// let randomNum = (array) => {
// let selectRandom = Math.floor(Math.random() * array.length);
//     return array[selectRandom];
// };

// console.log(randomNum(num));

//STEP 17
// num = [1, 7, 4, 18, 34, 3, 67, 45, 12, 90];
// let largestNum = (array) => {
//     return Math.max(...array);
// };
// console.log(largestNum(num));