function trip(input) {
    let budjet = Number(input[0]);
    let numSleep = Number(input[1]);
    let priceSleep = Number(input[2]);
    let percent = Number(input[3]);
    if (numSleep > 7) {
        priceSleep*=0.95;
    }
    let total = numSleep*priceSleep;
    let anadar = budjet*(percent/100);
    total+=anadar;
    if (budjet>= total) {
        console.log(`Ivanovi will be left with ${(budjet-total).toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${(total - budjet).toFixed(2)} leva needed.`);
    }

}
trip(["800.50",
"8",
"100",
"2"])
