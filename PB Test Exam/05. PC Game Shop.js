function shop(input) {
    let index = 0;
    let numGame = Number(input[index]);
    index++;
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let	others = 0;
    
    for (let i = 0; i < numGame; i++) {
       let nameGame = input[index];
       index++;
        if (nameGame === 'Hearthstone') {
            hearthstone++;
        }
        else if (nameGame === 'Fornite') {
            fornite++;
        }else if (nameGame === 'Overwatch') {
            overwatch++;
        }else{
            others++;
        }
    }
    console.log(`Hearthstone - ${((hearthstone/numGame)*100).toFixed(2)}%`)
    console.log(`Fornite - ${((fornite/numGame)*100).toFixed(2)}%`)
    console.log(`Overwatch - ${((overwatch/numGame)*100).toFixed(2)}%`)
    console.log(`Others - ${((others/numGame)*100).toFixed(2)}%`)
}
shop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])


