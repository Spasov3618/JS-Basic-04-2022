function easterCompetiti(params) {
    let index=0;
    let numBread = Number(params[index]);
    index++;
    let counterMax = 0;
    let shef = "";
    for (let i = 0; i < numBread ; i++)
    {
        let nameShef = params[index];
        index++;
        let counternow = 0;
        let evaluation = params[index];
        index++;
        while (evaluation!="Stop")
        {
            let input = Number(evaluation);
            counternow += input;
            evaluation = params[index];
            index++;
        }
        if (evaluation=="Stop")
        {
            console.log(`${nameShef} has ${counternow} points.`);
            if (counternow>counterMax)
            {
                console.log(`${nameShef} is the new number 1!`);
            }
        if (counternow>counterMax)
        {
            counterMax = counternow;
            shef = nameShef;
        }
        }

    }
    console.log(`${shef} won competition with ${counterMax} points!`);       
   }
   