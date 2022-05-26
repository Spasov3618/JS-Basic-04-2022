function battle(input) {
    let index=0;
    let numEggsOne = Number(input[index]);
    index++;
            let numEggsTwo = Number(input[index]);
            index++;
            let counterOne = numEggsOne;
            let counterTwo = numEggsTwo;
            let winner = input[index];
            index++;
            while (winner!= "End of battle")
            {
                if (winner == "one")
                {
                    
                    counterTwo--;
                }
                else if (winner== "two")
                {
                   
                    counterOne--;
                }
                if (counterOne == 0)
                {
                    console.log(`Player one is out of eggs. Player two has ${counterTwo} eggs left.`);
                    return;
                }
                if (counterTwo==0)
                {
                    console.log(`Player two is out of eggs. Player one has ${counterOne} eggs left.`);
                    return;
                }
                winner = input[index];
                index++;
            }
            if (winner== "End of battle")
            {
                console.log(`Player one has ${counterOne} eggs left.`);
                console.log(`Player two has ${counterTwo} eggs left.`);
}
}
