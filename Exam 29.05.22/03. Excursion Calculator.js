function calculator(input) {
    let numPeople = Number(input[0]);
    let season = input[1];
    let total = 0;
    switch (season) {
       // spring", "summer", "autumn" или "winter
        case 'spring':
            if (numPeople <=5) {
                total= numPeople*50;
            }else{
                total=numPeople*48;
            }
            break;
            case 'summer':
                if (numPeople <=5) {
                    total= numPeople*48.50;
                }else{
                    total=numPeople*45;
                }
                total*=0.85;
                break;
                case 'autumn':
            if (numPeople <=5) {
                total= numPeople*60;
            }else{
                total=numPeople*49.50;
            }
            break;
            case 'winter':
                if (numPeople <=5) {
                    total= numPeople*86;
                }else{
                    total=numPeople*85;
                }
                total*=1.08;
                break;
       
    }
    console.log(`${total.toFixed(2)} leva.`);
    
}



