function sum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let printLine = '';
    for (let i = startNum; i<= endNum; i++){
        let curentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < curentNum.length; j++) {
            let curentDigit = Number(curentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum+= curentDigit;
            }else{
                oddSum+= curentDigit;
            }

            
        }
        if (oddSum === evenSum) {
            printLine += `${i} `; 
        }
    }
    console.log(printLine);
}

