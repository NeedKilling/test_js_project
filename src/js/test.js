


let booleanValue = false;
if (booleanValue == true){
    console.log("Верно")
} 
else{
    console.log("Неверно")
}
let booleanValue1 = false;
let result = (booleanValue1 != true) ? true: false ;
console.log(result);


let a = 2;
if (a > 0 || a < 5){
    console.log("Верно")
}else{
    console.log("Неверно")
}

let valueA = 7;
let valueB = 2;
let c;
if(valueA <= 1 || valueB >= 3 ){
    console.log(valueA+valueB);
}else{
    console.log(valueA-valueB);
}


let A = 14;
let B = 2;

if(A > 2 && A<11 || B >= 6 && B <14){
    console.log("true");
}else{
    console.log("false");
}


let day  = 50;
let resultat = ( day<=10) ? "Первая декада" :
(day> 10 && day<=20) ? "Вторая декада" :
(day> 20 && day <= 30) ? "Третья декада": "Уже не декада";
console.log(resultat)

// 18. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let abcde = 'abcde';
switch(abcde[0]){
    case 'a':
        console.log("da");
        break;
    default:
        console.log("net");
}
// 19. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let val ="12345";
if(val[0]== 1 || val[0]== 2 || val[0]== 3){
    console.log("da")
}else{
    console.log("net")
}

// 20. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

let stringe = "567";
console.log(+stringe[0] + +stringe[1] + +stringe[2])

// 21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let ravense = "123123"
if ((+ravense[0] + +ravense[1] + +ravense[2])==(+ravense[3] + +ravense[4] + +ravense[5]) ){
    console.log("yes");
}else{
    console.log("no");
}