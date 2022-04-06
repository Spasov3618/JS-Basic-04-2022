

// Изход
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

// Резултатът трябва да се форматира до втория знак след десетичната запетая.
function toy(input){
    let numToy = Number(input[1])+Number(input[2])+Number(input[3])+Number(input[4])+Number(input[5]);
    let priceTravel = Number(input[0]);
    let puzels = Number(input[1])*2.60;
    let barby = Number(input[2])*3;
    let bear = Number(input[3])*4.10;
    let minion = Number(input[4])*8.20;
    let truk = Number(input[5])* 2;
    let total = puzels+barby+bear+minion+truk;
    if (numToy>= 50){
        total*=0.75;
    }
    total*=0.9;
if (total>=priceTravel){
    console.log(`Yes! ${(total-priceTravel).toFixed(2)} lv left.`);
}
else{
    console.log(`Not enough money! ${(priceTravel-total).toFixed(2)} lv needed.`);
}
}

