function film(input) {
    let name = input[0];
    let packet = input[1];
    let numTicket = Number(input[2]);
    let total = 0;
    switch (name)
    {
        case "John Wick":
            switch (packet)
            {
                case "Drink":
                    total = numTicket * 12;
                    break;
                case "Popcorn":
                    total = numTicket * 15;
                    break;
                case "Menu":
                    total = numTicket * 19;
                    break;
            }
            break;
        case "Star Wars":
            switch (packet)
            {
                case "Drink":
                    total = numTicket * 18;
                    break;
                case "Popcorn":
                    total = numTicket * 25;
                    break;
                case "Menu":
                    total = numTicket * 30;
                    break;
            }
            break;
            
        case "Jumanji":
            switch (packet)
            {
                case "Drink":
                    total = numTicket * 9;
                    break;
                case "Popcorn":
                    total = numTicket * 11;
                    break;
                case "Menu":
                    total = numTicket * 14;
                    break;
            }
            break;

    }
    if (name === "Star Wars" && numTicket>=4)
    {
        total *= 0.7;
    }
    if (name === "Jumanji" && numTicket==2)
    {
        total *= 0.85;
    }
    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}