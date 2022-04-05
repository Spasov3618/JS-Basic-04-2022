// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
function basket(input){
    let snikars = Number(input[0])*0.6;
    let ekip = snikars*0.8;
    let bool = ekip/4;
    let acsesoar = bool/5;
    let total =Number(input[0]) + snikars+ekip+bool+acsesoar;
    console.log(total);
}
basket(["365 "]);