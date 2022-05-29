function deepOfSanta(input) {
    let day = Number(input[0]);
    let lanchKg = Number(input[1]);
    let lanchFirst = Number(input[2]);
    let lanchSecond = Number(input[3]);
    let lanchThree = Number(input[4]);
let total = day*lanchFirst+day*lanchSecond+day*lanchThree;
if (lanchKg >= total) {
    console.log(`${Math.floor(lanchKg-total)} kilos of food left.`);
    
}else {
    console.log(`${Math.ceil(total-lanchKg)} more kilos of food are needed.`);
    
}


}


