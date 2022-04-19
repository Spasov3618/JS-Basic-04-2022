function travel(input) {
            let city = input[0];
            let packet = input[1];
            let vip = input[2];
            let numDay = Number(input[3]);
            let numDayMore = numDay;
            let total = 0;
            if (numDay < 1)
            {
                console.log("Days must be positive number!");
                return;
            }
            if (numDay > 7)
            {
                numDayMore = numDay - 1;
            }
            if (city != "Bansko" && city!= "Borovets" && city != "Varna" && city!= "Burgas" || packet != "noEquipment" && packet != "withEquipment" && packet != "noBreakfast"&& packet!=  "withBreakfast") 
            {
                console.log("Invalid input!");
                return;
            }
            switch (packet )
            {
                case "noEquipment":
                  
                    total = numDayMore * 80;
                    if (vip === "yes")
                    {
                        total *= 0.95;
                    }
                    
                break;
                case "withEquipment":
                    total = numDayMore * 100;
                    if (vip === "yes")
                    {
                        total *= 0.9;
                    }
                    break;
                case "noBreakfast":
                    total = numDayMore * 100;
                    if (vip === "yes")
                    {
                        total *= 0.93;
                    }
                    break;
                case "withBreakfast":
                    total = numDayMore * 130;
                    if (vip === "yes")
                    {
                        total *= 0.88;
                    }
                    break;
            }
            console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
}
travel(["Borovets",
"noEquipment",
"yes",
"6"])
