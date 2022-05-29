function cat(input) {
    
    let percentMaznini = Number(input[0]);
    let percentProteins = Number(input[1]);
    let percentVaglehidrat = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);
// (60 % от  2500) / 9 = 166.6 - общите грамове от мазнини
// (25 % от  2500) / 4 = 156.25 - общите грамове от протеини
// (15 % от 2500) / 4 = 93.75 - общите грамове от въглехидрати
//  Теглото на храната = 166.6 + 156.25 + 93.75 = 416.6 грама
//  Калории за един грам храна = 2500 / 416.6 = 6 калории
// 60% от тези 6 калории са вода => остават 100% - 60% = 40 %
//  В един грам от този тип хранене има 
// 40% от 6 = 2.4 калории
let maznini = ((totalCalories*percentMaznini)/100)/9;
let protein = ((totalCalories*percentProteins)/100)/4;
let vaglehidrat = ((totalCalories*percentVaglehidrat)/100)/4;
let totalkg = maznini+protein+vaglehidrat;
let kalories = totalCalories/totalkg;
let percent = 100-percentWater;
let total = (kalories*percent)/100;
console.log(total.toFixed(4));

}


