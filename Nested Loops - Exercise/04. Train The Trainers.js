function train(input) {
    let index = 0;
    let numGrade = Number(input[index]);
    index++;
    let tema;
    let totalGrade = 0;
    let countner = 0;
    while((tema = input[index]) !== 'Finish'){
        let curentGrade = 0;
        let curentcounter=0;
        index++;
        for (let i = 0; i < numGrade; i++) {
           let grade = Number(input[index]);
           index++;
           curentGrade+= grade;
           curentcounter++;
           totalGrade+=grade;
           countner++;

            
        }
        console.log(`${tema} - ${(curentGrade/curentcounter).toFixed(2)}.`)
    }
    console.log(`Student's final assessment is ${(totalGrade/countner).toFixed(2)}.`)
}
train(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
