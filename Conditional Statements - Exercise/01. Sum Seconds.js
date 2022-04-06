function sum(input){
    let totaltime = Number(input[0])+Number(input[1])+ Number(input[2]);
    let minutes = Math.floor(totaltime / 60);
    let second = totaltime%60;
    if (second<10){
        console.log(`${minutes}:0${second}`);

    }
    else{
        console.log(`${minutes}:${second}`);
    }
   
}
