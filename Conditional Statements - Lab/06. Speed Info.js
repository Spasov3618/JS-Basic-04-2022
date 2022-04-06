function speed(input){
    let speedInput = input[0];
    if (speedInput<=10){
        console.log('slow');
    } 
  
    else if (speedInput>10 && speedInput<= 50){
        console.log('average');
    } 
    else if (speedInput>50 && speedInput<=150){
        console.log('fast');
    }
    else if (speedInput>150 && speedInput<=1000){
        console.log('ultra fast');
    } else if (speedInput>1000){
        console.log('extremely fast');
    }




}
