function vacation(input) {
let index = 0;
let moneyForTravel = Number(input[index]);
index++;
let money = Number(input[index]);
index++;
let counterSpend = 0;
let counter = 0;

while(money<moneyForTravel){
    let command = input[index];
    index++;
    let moneyNew = Number(input[index]);
index++;
if (command === 'spend') {
    money-=moneyNew;
    counterSpend++;
    counter++;
    if (money<0) {
        money=0;
    }
    if (counterSpend === 5) {
        console.log("You can't save the money.");
        console.log(5);
    }
}
else if (command === 'save') {
    money+= moneyNew;
    counter++;
    counterSpend = 0;
}
}
console.log(`You saved the money for ${counter} days.`);
}