function graduation(input) {
    let name = input[0];
    let index = 1;
    let klas = 1;
    let totalAssessment = 0;
    let num = 0;
    while (klas <= 12)
    {
        let annualAssessment = Number(input[index]);
index++;
        if (annualAssessment < 4)
        {
            
            num++;
            if (num == 2)
            {
             console.log(`${name} has been excluded at ${klas} grade`);
             break;
            }
            continue;
        }
        klas++;
        totalAssessment += annualAssessment;
    }


        let averageSuccess = totalAssessment / 12;
    if (klas > 12)
    {


        console.log(`${name} graduated. Average grade: ${averageSuccess.toFixed(2)}`);
}
}

