function tournament(input) {
    let index =0;
    let nameTeam = input[index];
    index++;
    let numMeetings = Number(input[index]);
    index++;
    let counterW = 0;
    let counterD = 0;
    let counterL = 0;
    if (numMeetings === 0)
    {
        console.log(`${nameTeam} hasn't played any games during this season.`);
        return;
    }
    for (let i = 1; i <= numMeetings; i++)
    {
        let rezult = input[index];
        index++;
        switch (rezult)
        {
            case "W":
                counterW++;
                break;
            case "D":
                counterD++;
                break;
            case "L":
                counterL++;
                break;
        }
    }
    let points = counterW * 3 + counterD;
    let percentW = (counterW / numMeetings) * 100;
    console.log(`${nameTeam} has won ${points} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${counterW}`);
    console.log(`## D: ${counterD}`);
    console.log(`## L: ${counterL}`);
    console.log(`Win rate: ${percentW.toFixed(2)}%`);
}