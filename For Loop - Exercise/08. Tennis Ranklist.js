function tennis(input) {
    const  w = 2000;
    const  f = 1200;
    const  sf = 720;
    let index =0;
    let numTournament = Number(input[index]);
    index++;
    let numPointsStart =Number(input[index]);
    index++;
    let totalPoints = 0;
    let winnerTournaments = 0;
   
    for (let i = 0; i < numTournament; i++)
    {
        let tournament = input[index];
        index++;

        if (tournament == "W")
        {
            totalPoints += w;
            winnerTournaments++;
        }
        else if (tournament == "F")
        {
            totalPoints += f;
        }
        else if (tournament == "SF")
        {
            totalPoints += sf;
        }
    }
    let total = totalPoints + numPointsStart;
    console.log(`Final points: ${total}`);
    console.log(`Average points: ${Math.floor(totalPoints /numTournament) }`);
    let persent = winnerTournaments / numTournament * 100;
    console.log(`${persent.toFixed(2)}%`);
}
