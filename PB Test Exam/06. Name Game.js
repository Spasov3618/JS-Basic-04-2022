function nameGame(input) {
    let index =0;
            let namePlayer = input[index];
            index++;
            let pointsPlayer = 0;
            let bestPlayer = 0;
            let nameBestPlayer = "";
            while (namePlayer != "Stop")
            {
                let pointsW = 0;
                let pointsL = 0;
                for (let i = 0; i < namePlayer.length; i++)
                {
                    let num = Number(input[index]);
                    index++;
                    let sing = (namePlayer.charCodeAt(i));
                    
                 
                    
                    if (num === sing)
                    {
                        pointsW++;
                    }
                    else if (num !== sing)
                    {
                        pointsL++;
                    }
                }
            
                pointsPlayer = pointsW * 10 + pointsL * 2;
                if (bestPlayer <= pointsPlayer)
                {
                    bestPlayer = pointsPlayer;
                    nameBestPlayer = namePlayer;
                }
            
                
                namePlayer = input[index];
                index++;
            }
            console.log(`The winner is ${nameBestPlayer} with ${bestPlayer} points!`);
}
nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])
