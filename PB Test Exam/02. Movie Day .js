function movie(input) {
    let timeFoto = Number(input[0]);
    let sceni = Number(input[1]);
    let timeScena = Number(input[2]);
    let podgotovka = timeFoto * 0.15;
    let total = sceni * timeScena + podgotovka;
    if (timeFoto>= total)
    {
        let left = timeFoto - total;
        console.log(`You managed to finish the movie on time! You have ${Math.round( left)} minutes left!`);
    }
    else
    {
        let need = total - timeFoto;
        console.log(`Time is up! To complete the movie you need ${Math.round(need)} minutes.`); 
}
}

