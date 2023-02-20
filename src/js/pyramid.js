const lines = 5;
    let res = '';
    for(let i = 0;i<=lines;i++){  // создание строк
        for(let j = 0;j < lines-i;j++){  // создание пробелов
            res+=" "
        }
        for (let j = 0; j < (2 * i + 1); j++) { // создание звезд
            res += "*"; 
        }
        
        res +='\n'
    }
    console.log(res)