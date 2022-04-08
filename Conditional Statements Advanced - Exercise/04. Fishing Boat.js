function boat(input){
    let budjet = Number(input[0]);
    let season = input[1];
    let numberOfFishmen = Number(input[2]);
    const  rentBordSpring = 3000;
    const  rentBordSummer = 4200;
    const  rentBordAutumn = 4200;
    const  rentBordWinter = 2600;
     prise = 0;
    if (numberOfFishmen <= 6)
    {
        switch (season)
        {
            case "Spring":
                prise -= rentBordSpring * 0.10;
                prise = rentBordSpring + prise;
                break;
            case "Summer":
                prise -= rentBordSummer * 0.10;
                prise = rentBordSummer + prise;
                break;
            case "Autumn":
                prise -= rentBordAutumn * 0.10;
                prise = rentBordAutumn + prise;
                break;
            case "Winter":
                prise -= rentBordWinter * 0.10;
                prise = rentBordWinter + prise;
                break;
        }
    }
    else if (numberOfFishmen > 7 && numberOfFishmen <= 11)
    {
        switch (season)
        {
            case "Spring":
                prise -= rentBordSpring * 0.15;
                prise = rentBordSpring + prise;
                break;
            case "Summer":
                prise -= rentBordSummer * 0.15;
                prise = rentBordSummer + prise;
                break;
            case "Autumn":
                prise -= rentBordAutumn * 0.15;
                prise = rentBordAutumn + prise;
                break;
            case "Winter":
                prise -= rentBordWinter * 0.15;
                prise = rentBordWinter + prise;
                break;
        }
    }
    else if (numberOfFishmen > 12)
    {
        switch (season)
        {
            case "Spring":
                prise -= rentBordSpring * 0.25;
                prise = rentBordSpring + prise;
                break;
            case "Summer":
                prise -= rentBordSummer * 0.25;
                prise = rentBordSummer + prise;
                break;
            case "Autumn":
                prise -= rentBordAutumn * 0.25;
                prise = rentBordAutumn + prise;
                break;
            case "Winter":
                prise -= rentBordWinter * 0.25;
                prise = rentBordWinter + prise;
                break;
        }
    }
    if (numberOfFishmen % 2 == 0 && season != "Autumn")
    {
        prise -= prise * 0.05;
    }
    if (budjet >= prise)
    {
        let totalPrise = budjet - prise;
        console.log(`Yes! You have ${totalPrise.toFixed(2)} leva left.`);
    }
    else
    {
        let needMonne = prise - budjet;
        console.log(`Not enough money! You need ${needMonne.toFixed(2)} leva.`);
    }
}
