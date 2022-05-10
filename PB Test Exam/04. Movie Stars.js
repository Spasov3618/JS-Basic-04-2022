function movieStar(input) {
    let index = 0;
    let budjet = input[index];
    index++;
    let name;
    
    while ((name = input[index]) != 'ACTION') {
        index++;
        if (name.length >15) {
            budjet *=0.8;
        }
        else{
            let money =Number(input[index]);
            index++;
            budjet-= money
        }
        if (budjet <0) {
            console.log(`We need ${Math.abs(budjet).toFixed(2)} leva for our actors.`);
            return;
        }
    }
console.log(`We are left with ${budjet.toFixed(2)} leva.`);

}
movieStar(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
