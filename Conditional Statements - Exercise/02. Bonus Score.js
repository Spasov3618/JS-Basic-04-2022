function bonus(input){
    let point = Number(input);
    let total = 0.00;
    let bonusPoint = 0.00;
    if (point<=100){
        total= point+5;
        bonusPoint = 5;

    }
    else if (point>100 && point <= 1000){
        total = point+(point*0.2);
        bonusPoint = point*0.2;

    }
    else if (point>1000){
        total = point+(point*0.1);
        bonusPoint = point*0.1;
    }
    if (point %2 ==0){
        total += 1;
        bonusPoint+=1;
    }
    if (point % 10 == 5){
        total += 2 ;
        bonusPoint += 2; 
    }
    console.log(bonusPoint);
    console.log(total);
}

