function easterDecoration(params) {
    let index=0;
    let money = 0;
    let counter = 0;
    let numClient = Number(params[index]);
    index++;
    for (let i = 0; i < numClient; i++)
    {
        let input = params[index];
        index++;
        let moneyNow = 0;
        let counterNow = 0;
        while (input!= "Finish")
        {
            switch (input)
            {
                case "basket":
                    moneyNow += 1.50;
                    counterNow++;
                    counter++;
                    break;
                case "wreath":
                    moneyNow += 3.80;
                    counterNow++;
                    counter++;
                    break;
                case "chocolate bunny":
                    moneyNow += 7;
                    counterNow++;
                    counter++;
                    break;
            }
            input = params[index];
            index++;
            }
            if (counterNow % 2== 0)
            {
                moneyNow *= 0.8;
        }
            if (input == "Finish")
            {
                console.log(`You purchased ${counterNow} items for ${moneyNow.toFixed(2)} leva.`);
            }
            money += moneyNow;
        
    }
    console.log(`Average bill per client is: ${(money/numClient).toFixed(2)} leva.`);
}