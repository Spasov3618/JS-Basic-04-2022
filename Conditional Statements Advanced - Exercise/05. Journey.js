function journeo(input){
    let budjet = Number(input[0]);
            let season = input[1];
            let finalmoney = 0;
            if (budjet <= 100)
            {
                if (season == "summer")
                {
                    finalmoney = budjet * 0.3;
                    console.log("Somewhere in Bulgaria");
                    console.log(`Camp - ${finalmoney.toFixed(2)}`);
                }
                else
                {
                    finalmoney = budjet * 0.7;
                    console.log("Somewhere in Bulgaria");
                    console.log(`Hotel - ${finalmoney.toFixed(2)} `);
                }
            }
            else if (budjet > 100 && budjet <= 1000)
            {
                if (season == "summer")
                {
                    finalmoney = budjet * 0.4;
                    console.log("Somewhere in Balkans");
                    console.log(`Camp - ${finalmoney.toFixed(2)}`);
                }
                else
                {
                    finalmoney = budjet * 0.8;
                    console.log("Somewhere in Balkans");
                    console.log(`Hotel - ${finalmoney.toFixed(2)} `);
                }
            }
            else if (budjet > 1000)
            {
                finalmoney = budjet * 0.90;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${finalmoney.toFixed(2)} `);
            }
}