function steps(input) {
    const  goSteps = 10000;
    let totalSteps = 0;
    let index = 0;
    while (totalSteps <goSteps )
    {
        let command = input[index];
        index++;
        if (command == "Going home")
        {
            let stepLeft = Number(input[index]);
            index++;
            totalSteps += stepLeft;
            break;
        }
        let curentSteps =Number(command);
       totalSteps += curentSteps;
    }
    if (totalSteps >=goSteps )
    {
        console.log("Goal reached! Good job!");
        let total = totalSteps - goSteps;
        console.log(`${total} steps over the goal!`);
    }
    else
    {
        let overtotal = goSteps - totalSteps;
        console.log(`${overtotal} more steps to reach goal.`);
    }
}


