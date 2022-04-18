function piramid(input) {
    let num = Number(input[0]);
    let current = 1;
    let isBiger = false;
    let printCurentLine = '';
    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > num) {
                isBiger = true;
                break;
            }
            printCurentLine += current + " ";
            current ++;
        }
        console.log(printCurentLine);
        printCurentLine = '';
        if (isBiger) {
            break;
        }
        
    }
}
