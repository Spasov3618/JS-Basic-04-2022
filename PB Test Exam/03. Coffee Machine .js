function coffee(input) {
            let drink = input[0];
            let shugar = input[1];
            let numDrinks = Number(input[2]);
            let price = 0;
            switch (drink )
            {
                case "Espresso":
                    if (shugar==="Without")
                    {
                        price = numDrinks * 0.90;
                        price *= 0.65;
                    }
                    else if (shugar ==="Normal")
                    {
                        price = numDrinks * 1;
                    }
                    else if (shugar=== "Extra")
                    {
                        price = numDrinks * 1.20;
                    }
                    break;
                case "Cappuccino":
                    if (shugar === "Without")
                    {
                        price = numDrinks * 1.0;
                        price *= 0.65;
                    }
                    else if (shugar === "Normal")
                    {
                        price = numDrinks * 1.20;
                    }
                    else if (shugar === "Extra")
                    {
                        price = numDrinks * 1.60;
                    }
                    break;
                case "Tea":
                    if (shugar === "Without")
                    {
                        price = numDrinks * 0.50;
                        price *= 0.65;
                    }
                    else if (shugar === "Normal")
                    {
                        price = numDrinks * 0.6;
                    }
                    else if (shugar === "Extra")
                    {
                        price = numDrinks * 0.70;
                    }
                    break;
            }
            if (drink === "Espresso" && numDrinks >=5)
            {
                price *= 0.75; 
            }
            if (price> 15)
            {
                price *= 0.8;
            }
            console.log(`You bought ${numDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
        }
coffee(["Espresso",
"Without",
"10"])
