function cinema(input) {
    let index = 0;
    let numPlaces = Number(input[index]);
    index++;
            let counter = 0;
            let total = 0;
            let numPeople = input[index];
            index++;
            while (numPeople != "Movie time!")
            {

                let command = Number(numPeople);
                counter += command;
                if (counter > numPlaces)
                {
                    
                    break;
                }
                if (command % 3 == 0)
                {
                    total += (command * 5) - 5;
                }
                else
                {
                    total += command * 5;
                }
                numPeople = input[index];
                index++;


            }
        
                if (numPeople === "Movie time!" || counter === numPlaces)
                {
                 let left = numPlaces - counter;
        console.log(`There are ${left} seats left in the cinema.`);
                }
            else if (counter>numPlaces)
            {
                console.log("The cinema is full."); 
            }
            console.log(`Cinema income - ${total} lv.`);
}
cinema(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"])
