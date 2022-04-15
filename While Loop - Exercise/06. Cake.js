 function cake(input){
     let index = 0;
     let width = Number(input[index]);
     index++;
     let leng = Number(input[index]);
     index++;
     let numPars = width*leng;
//     let command;
//     while((command = input[index]) !== "STOP"){
//         index++;
//         let num = Number(command);
//     numCake-= num;
//     if (numCake <=0) {
//         console.log(`No more cake left! You need ${Math.abs(numCake)} pieces more.`);
//     }    
//     }
//     console.log(`${numCake} pieces are left.`);
// }

            while (numPars >0)
            {
                let command = input[index];
                if (command == "STOP")
                {
                    console.log(`${numPars} pieces are left.`);
                    break;
                }
                let paseCake = Number(command);
                numPars -= paseCake;
                index++;
            }
            if (numPars <=0)
            {
                console.log(`No more cake left! You need ${Math.abs(numPars)} pieces more.`);
            }
        }