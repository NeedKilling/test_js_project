"use strict"


let result;
let num  = 4;
switch(num){
    case 1:
        result = "зима";
        console.log(result);
        break;
    case 2:
        result = "весна";
        console.log(result);
        break;
    case 3:
        result = "лето";
        console.log(result);
        break;
    case 4:
        result = "осень";
        console.log(result);
        break;
}



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

let PersonalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}

    //PersonalMovieDB.movies[a] = b;

//   for(let i = 0;i<2;i++){
//         const a = prompt("Какой последний фильм вы посмотрели?",""),
//               b = prompt("На сколько вы его оцените по десяти бальной шкале","");
//         if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
//             PersonalMovieDB.movies[a] = b;
//             console.log("done"); 
//         }else{
//             console.log("error")
//             i--;
//         }
//     }
    // let r = 0;
    // while(r<2){
    //     const a = prompt("Какой последний фильм вы посмотрели?",""),
    //           b = prompt("На сколько вы его оцените по десяти бальной шкале","");
    //     if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
    //         PersonalMovieDB.movies[a] = b;
    //         console.log("done"); 
    //     }else{
    //         console.log("error")
    //         r--;
    //     }
    //     r++;
    // }
    let r = 0;
    do{
        const a = prompt("Какой последний фильм вы посмотрели?",""),
        b = prompt("На сколько вы его оцените по десяти бальной шкале","");
            if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
                PersonalMovieDB.movies[a] = b;
                console.log("done"); 
            }else{
                console.log("error")
                r--;
            }
        r++;
    }while(r<2)


    if(PersonalMovieDB.count < 10){
        alert("Довольно мало фильмов вы посмотрели.")
    }else if (PersonalMovieDB.count >= 10 && PersonalMovieDB <= 30) {
        alert("Вы классический зритель.")
    }else if(PersonalMovieDB.count>30){
        alert("ВЫ гуру фильмов")
    }else{
        alert("Произошла ошибка")
    }

console.log(PersonalMovieDB);




function cormaner(text){
    console.log(text)
}

cormaner("bilbobegins");



function sayHello(name){
    console.log(typeof(name))
   
}

sayHello("rilev")

function sayHello(name) {
    return console.log(typeof(`Привет,${name}`))
 }
 sayHello("ukrm")



 function returnNeighboringNumbers(number) {
    const massiv = [number-1,number,number+1]
    return massiv
 }
 console.log(returnNeighboringNumbers(4))


///////////////////////////////////////////////////////////////////////////////////////
 function getMathResult(main,number) {
    let result = main;
    if( typeof number !== "number" || number <=0){
       return main
    }else{
    }
    for(i = 2;i<=number;i++){
       result += `--${main*i}`
         
     }
     return result;
    }
   
 console.log(getMathResult(10,4))
 ////////////////////////////////////////////////////////////////////////////////////////

const array = [20,4,25,-1,0,-4];
let min = 0;
let max = 0;
function getMinResult(){
    for(let i = array.length;i > 0;i--){
        if(array[i]<min){
            min = array[i];
        }       
    }
    return min
}
console.log(getMinResult())
////
function getMaxResult(){
    for(let i = 0;i < array.length;i++){
        if(array[i] > max){
            max = array[i];
        }       
    }
    return max
}
console.log(getMaxResult())

// const arra = [5,4,50,-6,0,-3];

// const minimu = Math.min(...arra);
// console.log(minimu); 

// const numbers = [3, 4, 9, 3, -7, 1, 7]; 
// let minimum = numbers[0];
// for (const item of numbers) {
//   if(item < minimum) {
//     minimum = item;
//   }
// }
// console.log(minimum); // => 1



let arrayNumber = [];
let compute = 0;

function arrayComputeNumber(length,number){
    for(let i = 0;i<length;i++){
        arrayNumber[i] = i;
        arrayNumber[i] = String(arrayNumber[i])
        if(arrayNumber[i].includes(number)){
            compute++
        }
        if(arrayNumber[i].includes(String(number)+String(number))){
            compute++
        }
    }
    return compute
}

console.log(arrayComputeNumber(100,9))


let str = "Hell";
console.log(str.at(3));

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.indexOf("e"))
console.log(str.startsWith("He"))
console.log(str.slice(0,2))
console.log(str.slice(2))
console.log(str.slice(-3,-1))
console.log(str.endsWith("ll"))

let strin = ' ';
for(let i = 65;i <= 220;i++){
    strin += String.fromCodePoint(i);
}
console.log(strin)
console.log(( 'Österreich'.localeCompare('Zealand') ))//- // + //0 