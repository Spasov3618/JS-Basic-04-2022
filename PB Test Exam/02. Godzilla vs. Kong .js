function godzilla(input) {
    let budjet = Number(input[0]);
    let numPeople = Number(input[1]);
    let priceDresh = Number(input[2]);
    let decor = budjet*0.1;
    if (numPeople >150) {
        priceDresh *=0.9;
    }
    let total = (decor+(numPeople*priceDresh));
    if (total>budjet) {
        console.log('Not enough money!')
        console.log(`Wingard needs ${(total-budjet).toFixed(2)} leva more.`)
    }else{
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budjet-total).toFixed(2)} leva left.`)
    }


}

