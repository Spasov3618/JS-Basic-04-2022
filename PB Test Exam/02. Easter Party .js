function easterParty(input) {
//     •	Между 10 (вкл.) и 15 (вкл.) човека -> 15 % отстъпка от куверта за един човек
// •	Между 15 и 20 (вкл.) човека -> 20 % отстъпка от куверта за един човек
// •	Над 20 човека -> 25 % отстъпка от куверта за един човек
// Деси трябва да предвиди и закупуването на торта за партито. Цената на тортата е 10% от бюджета на Деси.
// Напишете програма, която изчислява дали бюджетът на Деси ще и е достатъчен за партито.
// Вход
// От конзолата се четат 3 реда:
// 1.	Брой гости – цяло число в интервала [1...99] 
// 2.	Цена на куверт за един човек – реално число в интервала [0.00 … 99.00]
// 3.	Бюджетът на Деси  – реално число в интервала [0.00 … 9999.00] 
// Изход
// На конзолата да се отпечата един ред:
// •	Ако бюджетът  е достатъчен:
// o	"It is party time! {останали пари} leva left."
// •	Ако бюджетът не е достатъчен:
// o	"No party! {недостигащи пари} leva needed."
// Резултатът да бъде форматиран до втория знак след десетичната запетая.
let numPeople = Number(input[0]);
let priceTicket = Number(input[1]);
let budjet = Number(input[2]);
let keik = budjet*0.1;
if (numPeople >=10 && numPeople <=15) {
    priceTicket*=0.85;
}
else if (numPeople>15 && numPeople<=20) {
        priceTicket*=0.80;
}
else if (numPeople >20) {
    priceTicket*=0.75;
}
let total = numPeople*priceTicket+keik;
if (budjet>=total) {
    console.log(`It is party time! ${(budjet-total).toFixed(2)} leva left.`);
    
}else{
    console.log(`No party! ${(total-budjet).toFixed(2)} leva needed.`);
    
}

}


