function club(input) {
    let index=0;
    let profit = Number(input[index]);
    index++;
    let total = 0;
    let sum = 0;
    let coctels = input[index];
    index++;
    while (coctels != "Party!")
    {
        let numCoctels = Number(input[index]);
        index++;
        let priceCoctels = coctels.length;
        sum  += numCoctels * priceCoctels;
       if (sum  % 2 != 0)
        {
            sum *= 0.75;
        }
        total += sum;
        sum = 0;

        if (total >= profit )
        {
            console.log("Target acquired.");
            console.log(`Club income - ${total.toFixed(2)} leva.`);
            break;
        }

        coctels = input[index];
        index++;
    }
    if (coctels === "Party!")
    {
    let differents = profit - total;
    console.log(`We need ${differents.toFixed(2)} leva more.`);
        console.log(`Club income - ${total.toFixed(2)} leva.`);
}
}