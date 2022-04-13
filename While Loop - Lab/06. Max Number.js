function maxNumber(input) {
    let num = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let arg;
    while((arg = input[index]) !== 'Stop'){
        let n = Number(input[index]);
        if (n>num) {
            num = n;
        }
        index++;
    }
    console.log(num);
}
maxNumber(["-1",
"-2",
"Stop"])


