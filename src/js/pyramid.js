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