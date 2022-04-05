function yard(input){
    let price = (Number(input)*7.61);
    let dicount = (Number(input)*7.61)*0.18;
    let total = price -dicount;
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${dicount} lv.`)
}

yard(["550"]);