function lunch(input){
    let serial = input[0];
    let timeSerial = input[1];
    let  timeRelax = input[2];
    let timeLunch = timeRelax / 8;
    let timeRest = timeRelax / 4;
    let timeLeft = timeRelax - (timeLunch + timeRest);
    let freetime = Math.abs (timeSerial - timeLeft);
    if (timeLeft >= timeSerial)
    {
     console.log(`You have enough time to watch ${serial } and left with ${Math.ceil ( freetime)} minutes free time.`);
    }
    else
    {
       console.log(`You don't have enough time to watch ${serial}, you need ${Math .ceil (freetime)} more minutes.`);
       
    }
}

