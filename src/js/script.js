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



// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

// let PersonalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// }

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
//     let r = 0;
//     do{
//         const a = prompt("Какой последний фильм вы посмотрели?",""),
//         b = prompt("На сколько вы его оцените по десяти бальной шкале","");
//             if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
//                 PersonalMovieDB.movies[a] = b;
//                 console.log("done"); 
//             }else{
//                 console.log("error")
//                 r--;
//             }
//         r++;
//     }while(r<2)


//     if(PersonalMovieDB.count < 10){
//         alert("Довольно мало фильмов вы посмотрели.")
//     }else if (PersonalMovieDB.count >= 10 && PersonalMovieDB <= 30) {
//         alert("Вы классический зритель.")
//     }else if(PersonalMovieDB.count>30){
//         alert("ВЫ гуру фильмов")
//     }else{
//         alert("Произошла ошибка")
//     }

// console.log(PersonalMovieDB);




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
    for(let i = 1;i<length;i++){
        arrayNumber[i-1] = i;
        arrayNumber[i-1] = String(arrayNumber[i-1])
        if(arrayNumber[i-1].includes(number)){
            compute++
        }
        if(arrayNumber[i-1].includes(String(number)+String(number))){
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


function calculateVolumeAndArea(rib) {
    if(number<0 || typeof(number) !== "number" || (number % 1) != 0){
        return console.log("При вычеслении произошла ошибка")
    }else{
       var volume = rib * rib * rib;
       var area = 6*(rib*rib)
    }
    
    return console.log(`'Объем куба: ${volume}, площадь всей поверхности: ${area}'`)
}
calculateVolumeAndArea(5.5)


function getCoupeNumber(number){
    if(number<0 || typeof(number) !== "number" || (number % 1) != 0){
        return console.log("Ошибка. Проверьте правильность введенного номера места")
    }else if(number == 0 || number > 36){
        return console.log("Таких мест в вагоне не существует")
    }

    return console.log(Math.ceil(number/4))

}
getCoupeNumber(35)







function getTimeFromMinutes(time) {
    const hours = Math.floor(time/60);
    const minuts = time % 60;
    let hoursStr = '';
    switch(hours){
        case 1:
            hoursStr = 'час'
            break;
        case 2:
            hoursStr = 'часа'
            break;
        case 3:
            hoursStr = 'часа'
            break;
        case 4:
            hoursStr = 'часа'
            break;
        default:
            hoursStr = 'часов'
            break;
    }
    if(time<0 || typeof(time) !== "time" || (time % 1) != 0){
        return console.log("Ошибка, проверьте данные")
    }
    return console.log(`Это ${hours} ${hoursStr} и ${minuts} минут`)
}
getTimeFromMinutes(1000)




function findMaxNumber(one,two,tree,four) {
    const arr = [one,two,tree,four];
    let max = 0;
    if (typeof(one) !== 'one' ||
        typeof(two) !== 'two' ||
        typeof(tree) !== 'tree' ||
        typeof(four) !== 'four') {
        //return console.log(0);
        }
    for(i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
        
        
        return console.log(max)
    }
findMaxNumber(1,2,5,0)




function fib(number){
    if(typeof(number) !== 'number'|| number <= 0 || !Number.isInteger(number)){
        return 0
    }else if(number ===1){
        return 0
    }
    let a = 0;
    let b = 1;
    let c;
    let result = `${a} ${b}`;
    for(let i = 0; i < number-2; i++){
        c = a + b
        result += ` ${c}`
        a=b;
        b=c;
    }
    return result
}
console.log(fib(8))
