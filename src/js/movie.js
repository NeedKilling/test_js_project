"use strict"
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","")

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms || numberOfFilms == 0)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();    


let PersonalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}

   function rememberMyFilms(){
    for(let i = 0;i<2;i++){
        const a = prompt("Какой последний фильм вы посмотрели?",""),
              b = prompt("На сколько вы его оцените по десяти бальной шкале","");
        if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
            PersonalMovieDB.movies[a] = b;
            console.log("done"); 
        }else{
            console.log("error")
            i--;
        }
    }
   }
rememberMyFilms();



function detectedPersonalLevel(){
    if(PersonalMovieDB.count < 10){
        alert("Довольно мало фильмов вы посмотрели.")
    }else if (PersonalMovieDB.count >= 10 && PersonalMovieDB <= 30) {
        alert("Вы классический зритель.")
    }else if(PersonalMovieDB.count>30){
        alert("ВЫ гуру фильмов")
    }else{
        alert("Произошла ошибка")
    }
}
  detectedPersonalLevel();  

function writeYourGenres(){
    for(let i = 1;i<4;i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}`,"") 
        PersonalMovieDB.genres[i-1] = a;
        
    }
}

writeYourGenres();

// function showMyDB(){
//     if(PersonalMovieDB.privat == false){
//         console.log(PersonalMovieDB)
//     }
// }
// showMyDB();
function showMyDB(hidden){
    if(!hidden){
        console.log(PersonalMovieDB)
    }
}
showMyDB(PersonalMovieDB.privat);