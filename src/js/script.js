"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

let PersonalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
const a = prompt("Какой последний фильм вы посмотрели?",""),
    b = prompt("На сколько вы его оцените по десяти бальной шкале",""),
    c = prompt("Какой последний фильм вы посмотрели?",""),
    d = prompt("На сколько вы его оцените по десяти бальной шкале","");

    PersonalMovieDB.movies[a] = b;
    PersonalMovieDB.movies[c] = d;
console.log(PersonalMovieDB);