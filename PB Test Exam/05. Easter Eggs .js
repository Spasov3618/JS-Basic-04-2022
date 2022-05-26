function easterEgg(input) {
    let index=0;
    let numEggs = Number(input[index]);
    index++;
            let counterRed = 0;
            let counterOrange = 0;
            let counterBlue = 0;
            let counterGreen = 0;
            let maxColor = 0;
            let colorMax = "";
            for (let i = 1; i <= numEggs; i++)
            {
                let color = input[index];
                index++;
                if (color == "red")
                {
                    counterRed++;
                }
                else if (color == "orange")
                {
                    counterOrange++;
                }
                else if (color == "blue")
                {
                    counterBlue++;
                }
                else if (color == "green")
                {
                    counterGreen++;
                }
            }
            if (counterRed > maxColor)
            {
                maxColor = counterRed;
                colorMax = "red";
            }
            if (counterOrange > maxColor)
            {
                maxColor = counterOrange;
                colorMax = "orange";
            }
            if (counterBlue > maxColor)
            {
                maxColor = counterBlue;
                colorMax = "blue";
            }
            if (counterGreen > maxColor)
            {
                maxColor = counterGreen;
                colorMax = "green";
            }
            console.log(`Red eggs: ${counterRed}`);           
           console.log(`Orange eggs: ${counterOrange}`);           
           console.log(`Blue eggs: ${counterBlue}`);           
           console.log(`Green eggs: ${counterGreen}`);           
           console.log(`Max eggs: ${maxColor} -> ${colorMax}`);    
}

