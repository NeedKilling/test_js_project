"use strict"

let number = 10;

while(number <= 20){
    console.log(number)
    number++
}
 let num = 10;
do{
    console.log(num)
    num++
}while(num<=20)



for (let i = 10; i > 0; i--){
    console.log(i)
}

let result = '';
let jValue ;
for (let i = 1; i < 5;i++){
    for(jValue = 0; jValue < i; jValue++){
       result  +="*";
    }
    result +='\n'
    
}

for (let i = 1; i < 5;i++){
    for(jValue = 4; jValue > i; jValue--){
       result  +="*";
    }
    result +='\n'
    
}
console.log(result);




let ar = 5;
while(ar <= 10){
    console.log(ar);
    ar++;
}

for(let a = 20;a>10;a--){
    if(a===13){
        break;
    }
    console.log(a);
}

for(let i = 2;i<=10;i++){
    if(i%2 === 0){
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let req =2;
while(req <= 16){
     if(req%2 === 1){
        console.log(req);
     }
        
    
    req++;
}

const arrayOfNumbers = [];

for(let i = 5; i <= 10;i++){
    arrayOfNumbers[i-5]=i;
    console.log(i)
}

return arrayOfNumbers;



const arra = [];

for(let i = 4; i <= 10;i++){
    arra.push(i)
    console.log(i)
}

return arra;


const ark = [3,5,8,16,20,23,50];
const resultat = [];

for(let i = 1; i <= ark.length;i++){
    resultat[i-1] = ark[i-1];
}

console.log(resultat)
console.log(ark)

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if(typeof(data[i]) === 'number'){
       data[i] *= 2;
    }else if(typeof(data[i]) === 'string'){
        data[i] = `${data[i]} - done`
        // data[i] + ' - done'
    }
}
console.log(data);

let vr = 'чумбик';
if(typeof(vr) === 'number'){
    console.log("это число")
}else if(typeof(vr) === 'string'){
    console.log("а это строка")
}


const datar = [5, 10, 'Shopping', 20, 'Homework'];
    const resulttut = [];
    for(let i = 1; i<=datar.length;i++){
        resulttut[i-1] = datar[datar.length-i]
    }
    console.log(resulttut)




    const lines = 5;
    let res = '';
    for(let i = 0;i<=lines;i++){
        for(let j = 0;j < lines-i;j++){
            res+=" "
        }
        for (let j = 0; j < (2 * i + 1); j++) {
            res += "*"; // и здесь j
        }
        
        res +='\n'
    }
    console.log(res)

   


//     let arr =[];
// for(let i = 0;i<20;i+=2){
//     arr.push(i)
// }
// console.log(arr)

let arr =[];
for(let i = 0;i<20;i++){
    if(i%2==0){
       arr.push(i)
    }
}
console.log(arr)

let arrr =[];
rol = 30;
while(rol>0){
    if(rol%3==0){
        arrr.push(rol)
    }
    rol--;
}
console.log(arrr)


let array = [];
for(let i = 0;i<10;i++){
    array[i]=i*i;
}
console.log(array)


let rolik=0;
const grab = [1,2,3,4,6,12,15,23,54];
for(i = 0 ; i<grab.length;i++){
    if(grab[i]%2==0){
        rolik++;
    }
}
console.log(rolik)