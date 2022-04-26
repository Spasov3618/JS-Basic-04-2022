function series(input) {
    

let name = input[0];
            let numSeson = Number(input[1]);
            let epizod = Number(input[2]);
            let minEpizod = Number(input[3]);
            minEpizod = minEpizod + minEpizod * 0.2;
            let total = (numSeson * 10) + numSeson * epizod * minEpizod;
            console.log(`Total time needed to watch the ${name} series is ${Math.floor(total)} minutes.`);
        }
        