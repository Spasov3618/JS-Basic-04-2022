function series(input) {
    let index = 0;
    let budjet = Number(input[index]);
    index++;
    let numSeries = Number(input[index]);
    index++;
    for(let i = 0; i <numSeries; i++) {
        let name = input[index];
        index++;
        let price = Number(input[index])
        index++;
        if (name === 'Thrones') {
            price*=0.5;
            budjet-= price;
        }
        else if (name === 'Lucifer') {
            price *= 0.6;
            budjet-= price
        }
        else if (name === 'Protector') {
            price *= 0.7;
            budjet-= price;

        }
        else if (name === 'TotalDrama') {
            price*= 0.8;
            budjet-= price;
        }
        else if (name === 'Area') {
            price*=0.9;
            budjet-= price;
        }
        else{
            budjet-= price;
        }
    }
    if (budjet >= 0) {
        console.log(`You bought all the series and left with ${budjet.toFixed(2)} lv.`)
    }
    else{
        console.log(`You need ${Math.abs(budjet).toFixed(2)} lv. more to buy the series!`)
    }
}
series(["10",
"3",
"Thrones",
"5",
"Riverdale",
"5",
"Gotham",
"2"])
