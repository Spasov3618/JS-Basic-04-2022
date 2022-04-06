function after(input){
    let hours = Number(input[0]);
    let seconds = Number(input[1])+15;

    if (seconds>59){
        hours +=1;
        seconds -=60;
        if (hours>23){
            hours=0;
        }
    }
if (seconds<10){
    console.log(`${hours}:0${seconds}`)
}
else{
    console.log(`${hours}:${seconds}`)
}
}
