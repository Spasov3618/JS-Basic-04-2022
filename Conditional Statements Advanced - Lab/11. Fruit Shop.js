function fruit(input){
             let fruit = input[0];
            let day = input[1];
            let number = Number(input[2]);
            let prise = 0;
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
            {
                switch (fruit)
                {
                    case "banana":
                        prise = 2.50;
                        break;
                    case "apple":
                        prise = 1.20;
                        break;
                    case "orange":
                        prise = 0.85;
                        break;
                    case "grapefruit":
                        prise = 1.45;
                        break;
                    case "kiwi":
                        prise = 2.70;
                        break;
                    case "pineapple":
                        prise = 5.50;
                        break;
                    case "grapes":
                        prise = 3.85;
                        break;
                    default:
                        console.log("error");
                        break;
                }
            }
            else if (day == "Saturday" || day == "Sunday")
            {
                switch (fruit)
                {
                    case "banana":
                        prise = 2.70;
                        break;
                    case "apple":
                        prise = 1.25;
                        break;
                    case "orange":
                        prise = 0.90;
                        break;
                    case "grapefruit":
                        prise = 1.60;
                        break;
                    case "kiwi":
                        prise = 3.00;
                        break;
                    case "pineapple":
                        prise = 5.60;
                        break;
                    case "grapes":
                        prise = 4.20;
                        break;
                    default:
                        console.log("error");
                        break;
                }
            }
            else
            {
                console.log("error");
            }
            let totalprise = prise * number;
            if (prise != 0)
            {
                console.log(`${totalprise.toFixed(2)}`);
            }
        }
    

            
 