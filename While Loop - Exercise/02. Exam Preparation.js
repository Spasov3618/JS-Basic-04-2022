function exam(input) {
    let index = 0;
    let numBadGrade = Number(input[index]);
    index++;
    let problem;
    let grade =0;
    let counter =0;
    let badGrade = 0;
    let lastProblem = '';
    while((problem= input[index]) !== 'Enough'){
index++;
let newGrade = Number(input[index]);
index++;
counter++;
grade += newGrade
lastProblem=problem;
if (newGrade <=4) {
    badGrade++;
    if (badGrade === numBadGrade) {
        console.log(`You need a break, ${badGrade} poor grades.`);
        return;
    }
}

    }
    let averageGrade = grade/counter;
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastProblem}`);
}

