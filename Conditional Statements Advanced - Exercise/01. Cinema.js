function cinema(input){
    let film = input[0];
    let red = Number(input[1]);
    let col = Number(input[2]);
    let total = 0;
    switch(film){
        case 'Premiere':
            total = red*col*12;
            break;
            case 'Normal':
                total =red*col*7.50;
                break;
                case 'Discount':
                    total = red*col*5;
    }
    console.log(`${total.toFixed(2)} leva`)
}