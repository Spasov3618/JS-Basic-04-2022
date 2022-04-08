function timeExam(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let difference = 0;
    let hours = 0;
    let minutes = 0;

    minExam += hourExam * 60;
    minArrive += hourArrive * 60;

    if (minArrive > minExam)
    {
        console.log("Late");
        difference = minArrive - minExam;
        if (difference < 60)
        {
            console.log(`${difference} minutes after the start.`);
        }
        else
        {
            hours = difference / 60;
            minutes = difference % 60;
            if(minutes<10){
                console.log(`${hours}:0${minutes} hours after the start`);  
            }
            else{

                console.log(`${hours}:${minutes} hours after the start`);
            }
        }

    }
    else if (minArrive < minExam - 30)
    {
        console.log("Early");
        difference = minExam - minArrive;
        if (difference < 60)
        {
            console.log(`${difference} minutes before the start`);
        }
        else
        {
            hours = difference / 60;
            minutes = difference % 60;
if(minutes<10){

    console.log(`${hours}:0${minutes} hours before the start`);
}
else{
    console.log(`${hours}:0${minutes} hours before the start`);
}
        }
    }
    else
    {
        console.log("On time");
        difference = minExam - minArrive;
        console.log(`${difference} minutes before the start`);
    }
}
timeExam(["16",
"00",
"15",
"00"])
