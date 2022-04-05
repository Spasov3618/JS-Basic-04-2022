function deposit (input){
    let lihva = Number(input[0])*(Number(input[2]/100));
    let lihvaMounth = lihva/12;
    let depo = Number(input[0])+ (Number(input[1])*lihvaMounth);
    console.log(depo)
}

deposit(["200 ","3 ","5.7 "]);
//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)