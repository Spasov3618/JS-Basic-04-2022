function cinema(input) {
    let index = 0;
    let nameOfFilm = input[index];
    index++;
    let countner = 0;
    let ollstudentTikket = 0;
    let ollstandartTikket = 0;
    let ollkidTikket = 0;
    while (nameOfFilm != "Finish")
    {
        let studentTikket = 0;
        let standartTikket = 0;
        let kidTikket = 0;
        let place = Number(input[index]);
        index++;
        for (let i = 0; i < place; i++)
        {
            let tikket = input[index];
            index++;
            if (tikket == "End")
            {
                break;
            }
            switch (tikket)
            {

                case "student":

                    studentTikket++;
                    countner++;
                    ollstudentTikket++;
                    break;

                case "standard":

                    standartTikket++;
                    countner++;
                    ollstandartTikket++;
                    break;

                case "kid":

                    kidTikket++;
                    countner++;
                    ollkidTikket++;
                    break;
            }
        }

        let salePlaces = studentTikket + standartTikket + kidTikket;
        let percent = salePlaces / place * 100;
        console.log(`${nameOfFilm} - ${percent.toFixed(2)}% full.`);
        nameOfFilm = input[index];
        index++;
    }


        let percentStudent =  ollstudentTikket / countner *100;
        let percentStandard =  ollstandartTikket / countner*100;
        let percentKid =  ollkidTikket / countner*100;
        console.log(`Total tickets: ${countner}`);
        console.log(`${percentStudent.toFixed(2)}% student tickets.`);
        console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
        console.log(`${percentKid.toFixed(2)}% kids tickets.`);
   
    }


