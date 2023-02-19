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


