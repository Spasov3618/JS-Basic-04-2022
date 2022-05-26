function easterBake(input) {
    let index=0;
    let numBred = Number(input[index]);
    index++;
    let counterSugar = 0;
    let counterFlour = 0;
    let maxFlour = 0;
    let maxSugar = 0;
    for (let i = 1; i <= numBred; i++)
    {
        let sugar = Number(input[index]);
        index++;
        let flour = Number(input[index]);
        index++;
        counterSugar += sugar;
        counterFlour += flour;
        if (sugar>maxSugar )
        {
            maxSugar = sugar;
        }
        if (flour>maxFlour)
        {
            maxFlour = flour;
        }
    }
    let packageSugar =Math.ceil (counterSugar/950);
    let packageFlour = Math.ceil(counterFlour/750);
   console.log(`Sugar: ${packageSugar}`);
   console.log(`Flour: ${packageFlour}`);
   console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
