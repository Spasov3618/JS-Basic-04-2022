function move(input) {
    let budjet = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numDay = Number(input[3]);
    let total = 0;
    switch (destination)
    {
        case "Dubai":
            if (season === "Winter")
            {
                total = (45000 * 0.7) *numDay;
            }
            else if (season === "Summer")
            {
                total = (40000 * 0.7)*numDay;
            }
            break;
        case "Sofia":
            if (season === "Winter")
            {
                total = numDay* (17000 + (17000 * 0.25));
            }
            else if (season === "Summer")
            {
                total =numDay* (12500+ (12500* 0.25));
            }
            break;
        case "London":
            if (season === "Winter")
            {
                total = 24000 * numDay;
            }
            else if (season === "Summer")
            {
                total = 20250 * numDay;
            }
            break;
    }
    if (budjet>= total)
    {
        let left = budjet - total;
        console.log(`The budget for the movie is enough! We have ${left.toFixed(2)} leva left!`);
    }
    else
    {
        let need = total - budjet;
        console.log(`The director needs ${need.toFixed(2)} leva more!`);
    }
}