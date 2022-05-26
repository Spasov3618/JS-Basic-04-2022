function paintingEggs(input) {
    let sice = input[0];
    let color = input[1];
    let numBatches = Number(input[2]);
    let price = 0;
    switch (sice)
    {
        case "Large":
            switch (color)
            {
                case "Red":
                    price = numBatches * 16;
                    break;
                case "Green":
                    price = numBatches * 12;
                    break;
                case "Yellow":
                    price = numBatches * 9;
                    break;
            }
            break;
       


        case "Medium":
            switch (color)
            {
                case "Red":
                    price = numBatches * 13;
                    break;
                case "Green":
                    price = numBatches * 9;
                    break;
                case "Yellow":
                    price = numBatches * 7;
                    break;
            }
            break;
        case "Small":
            switch (color)
            {
                case "Red":
                    price = numBatches * 9;
                    break;
                case "Green":
                    price = numBatches * 8;
                    break;
                case "Yellow":
                    price = numBatches * 5;
                    break;
            }
            break;
    }
    price *= 0.65;
    console.log(`${price.toFixed(2)} leva.`);
}

