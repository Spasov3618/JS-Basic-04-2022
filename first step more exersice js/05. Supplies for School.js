// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)
// Вход
// От конзолата се четат 4 числа:
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]
function supplies(input){
    let pen = Number(input[0])*5.80;
    let marker = Number(input[1])*7.20;
    let preparation = Number(input[2])*1.20;
    let percent = Number(input[3])/100;
    let sum = (pen+marker+preparation);
    let total = sum - (sum*percent); 
    console.log(total);
}
supplies(["2 ","3 ","4 ","25 "]);