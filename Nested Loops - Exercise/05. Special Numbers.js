function special(input) {
    let num = Number(input[0]);
    let printLine = '';
    for(let i= 1111; i<=9999; i++){
        let curentNum = "" + i;
        let curentNumber = '';
        for (let j = 0; j < curentNum.length; j++) {
         let curentDigit = curentNum.charAt(j);
         if (num % curentDigit === 0) {
             curentNumber+= curentDigit;
         }
        } 
        if (curentNumber === curentNum) {
           printLine += `${i} `
        }
    }
    console.log(printLine)
}
