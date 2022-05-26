function easterShop(input) {
    let index =0;
    let numEggs = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counterEggs = numEggs;
    let counterEggsBuy = 0;
    while (command!= "Close")
    {
        let num = Number(input[index]);
        index++;
        if (command=="Fill")
        {
            counterEggs += num;
        }
        if (num>counterEggs)
        {
           console.log("Not enough eggs in store!");
           console.log(`You can buy only ${counterEggs}.`);
            return;
        }
        if (command=="Buy")
        {
            counterEggs-=num;
            counterEggsBuy += num;
        }
        command = input[index];
        index++;
    }
    if (command=="Close")
    {
       console.log("Store is closed!");
       console.log(`${counterEggsBuy} eggs sold.`);
    }
}
