function ski(input){
    const  priceRoomForOnePerson = 18;
            const  priceApartment = 25;
            const  pricePresidentApartment = 35;
            let dni = Number(input[0]);
            let room = input[1];
            let rating = input[2];
            let totalPrice = 0;
            let naits = dni - 1;
            if (naits < 10)
            {
                switch (room)
                {
                    case "room for one person":
                        totalPrice = priceRoomForOnePerson * naits;
                        break;
                    case "apartment":
                        totalPrice = priceApartment * naits;
                        totalPrice -= totalPrice * 0.3;
                        break;
                    case "president apartment":
                        totalPrice = pricePresidentApartment * naits;
                        totalPrice -= totalPrice * 0.1;
                        break;
                }
            }
            else if (naits >= 10 && naits < 15)
            {
                switch (room)
                {
                    case "room for one person":
                        totalPrice = priceRoomForOnePerson * naits;
                        break;
                    case "apartment":
                        totalPrice = priceApartment * naits;
                        totalPrice -= totalPrice * 0.35;
                        break;
                    case "president apartment":
                        totalPrice = pricePresidentApartment * naits;
                        totalPrice -= totalPrice * 0.15;
                        break;
                }
            }
            else if (naits >= 15)
            {
                switch (room)
                {
                    case "room for one person":
                        totalPrice = priceRoomForOnePerson * naits;
                        break;
                    case "apartment":
                        totalPrice = priceApartment * naits;
                        totalPrice -= totalPrice * 0.50;
                        break;
                    case "president apartment":
                        totalPrice = pricePresidentApartment * naits;
                        totalPrice -= totalPrice * 0.20;
                        break;
                }
            }
            if (rating == "positive")
            {
                totalPrice += totalPrice * 0.25;
            }
            else if (rating == "negative")
            {
                totalPrice -= totalPrice * 0.1;
            }
            {
                console.log(`${totalPrice.toFixed(2)}`);
            }
}