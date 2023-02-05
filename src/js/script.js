"use strict"

const activeUser = "makar";
let name="Джон";
let admin= name;
alert(`Admin это ${admin}`)

console.log('HELLO')

let object = {
    userName:"makar",
    age: 19,
}
console.log("Имя пользователя: "+object.userName+" возраст пользователя: "+object.age)
let arr=['orange.jpg', 'plum.png', 'apple.bmp']
console.log(arr[0])

// const result = confirm("are you here?");
// console.log(result);

const userAnswer = +prompt("Сколько вам лет?", "18");
console.log(userAnswer);
