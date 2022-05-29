function bestPlayer(input) {
    let index=0;
    let namePlayer = input[index];
    index++;
            let veryGools = 0;
            let hatTrik = 0;
            
            let bestPlayer = "";
            while (namePlayer != "END")
            {
            let numGools = Number(input[index]);
            index++;
                if (veryGools < numGools)
                {
                    veryGools = numGools;
                    bestPlayer = namePlayer;
                }
                if (numGools >=3)
                {
                    hatTrik = numGools;
                    bestPlayer = namePlayer;
                }
                if (numGools >=10)
                {
                    break;
                }
                namePlayer = input[index];
                index++;
            }
            console.log(`${bestPlayer} is the best player!`);
            if (veryGools >=3)
            {
                console.log(`He has scored ${veryGools} goals and made a hat-trick !!!`);
            }
            else
            {
                console.log(`He has scored ${veryGools} goals.`);    
}
}

