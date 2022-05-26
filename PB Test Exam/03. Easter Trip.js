function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let numNights = Number(input[2]);
    let price = 0;
    switch (destination)
    {
        case "France":
            switch (dates)
            {
                case "21-23":
                    price = numNights * 30;
                    break;
                case "24-27":
                    price = numNights * 35;
                    break;
                case "28-31":
                    price = numNights * 40;
                    break;
            }
            break;
    
        case "Italy":
            switch (dates)
            {
                case "21-23":
                    price = numNights * 28;
                    break;
                case "24-27":
                    price = numNights * 32;
                    break;
                case "28-31":
                    price = numNights * 39;
                    break;
            }
                    break;
        case "Germany":
            switch (dates)
            {
                case "21-23":
                    price = numNights * 32;
                    break;
                case "24-27":
                    price = numNights * 37;
                    break;
                case "28-31":
                    price = numNights * 43;
                    break;
            }
                            break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}
