function ratings(input) {
    let index = 0;
    let numFilms = Number(input[index]);
    index++;
            let maxReiting = Number.MIN_VALUE;
            let minReiting = Number.MAX_VALUE;
            let totalReiting = 0;
            let maxFilm = "";
            let minFilm = "";
            for (let i = 0; i < numFilms; i++)
            {
                let nameFilm = input[index];
                index++;
                let reiting = Number(input[index]);
                index++;
                if (maxReiting<reiting)
                {
                    maxReiting = reiting;
                    
                    maxFilm = nameFilm;
                   
                }
                if (reiting <minReiting)
                {
                    minReiting = reiting;
                   
                    minFilm = nameFilm;
                }
                totalReiting += reiting;
            }
            let average = totalReiting / numFilms;
            console.log(`${maxFilm} is with highest rating: ${maxReiting.toFixed(1)}`);
            console.log(`${minFilm} is with lowest rating: ${minReiting.toFixed(1)}`);
            console.log(`Average rating: ${average.toFixed(1)}`);
}
ratings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
