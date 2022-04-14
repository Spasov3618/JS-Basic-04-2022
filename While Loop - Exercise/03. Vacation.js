function vacation(input) {
 let index = 0;
// let moneyForTravel = Number(input[index]);
// index++;
// let money = Number(input[index]);
// index++;
// let counterSpend = 0;
// let counter = 0;

// while(money<moneyForTravel){
//     let command = input[index];
//     index++;
//     let moneyNew = Number(input[index]);
// index++;
// if (command === 'spend') {
//     counterSpend++;
//     counter++;
//     if (money<0) {
//         money=0;
//     }else{
        
//         money-=moneyNew;
//     }
//     if (counterSpend === 5) {
//         console.log("You can't save the money.");
//         console.log(5);
//     }
// }
// else if (command === 'save') {
//     money+= moneyNew;
//     counter++;
//     counterSpend = 0;
// }
// }
// console.log(`You saved the money for ${counter} days.`);
let vacancion = Number(input[index]);
index++;
            let currmoney = Number(input[index]);
            index++;

            let days = 0;
            let spend = 0;
            while (spend != 5)
            {
                let command = input[index];
                index++;
                let money = Number(input[index]);
                index++;
                days++;
                if (command === "save")
                {
                    currmoney += money;
                    spend = 0;
                }

                else if (command === "spend")
                {
                    spend++;
                    if (money > currmoney)
                    {
                        currmoney = 0;
                    }
                    else
                    {
                        currmoney -= money;
                    }
                }
                if (currmoney >= vacancion)
                {
                    console.log(`You saved the money for ${days} days.`);
                    break;
                }
            }
            if (spend == 5)
            {
               console.log("You can't save the money.");

                console.log(`${days}`);
 }
}