function pool(input) {
    let numPeople = Number(input[0]);
    let priceInput = Number(input[1]);
    let priceBed = Number(input[2]);
    let priceUmbrela = Number(input[3]);
    let numBed = Math.ceil(numPeople*0.75);
    let numUmbrela = Math.ceil(numPeople/2);
    let total = (numPeople*priceInput)+(numBed*priceBed) + (numUmbrela*priceUmbrela );
    console.log(`${total.toFixed(2)} lv.`);
}
pool(["21",
"5.50",
"4.40",
"6.20"])
