function account(input) {
    let index = 0;
    let total = 0;
    let arg;
    while((arg =input[index]) !== "NoMoreMoney"){
        let sum = Number(input[index]);
        if (sum <0) {
            console.log('Invalid operation!');
            break;
        }else{
        total+=sum;
        console.log(`Increase: ${sum.toFixed(2)}`);
        index++;
        }
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

