function shop(input){
    const videoCard = 250;
            let budjet = input[0];
            let videoCardPc = input[1];
            let procesorsPc = input[2];
            let ramMemoryPc = input[3];
            let priseVideoCard = videoCardPc * videoCard;
            let priseProcesors = (videoCardPc * videoCard) * 0.35;
            let totalSumProcesor = procesorsPc * priseProcesors;
            let priseRamMemory = (videoCardPc * videoCard) * 0.10;
            let totalPriseRamMemory = priseRamMemory * ramMemoryPc;
            let totalPrise = priseVideoCard + totalSumProcesor + totalPriseRamMemory;
            if (videoCardPc > procesorsPc)
            {
                totalPrise *= 0.85;
            }
            if (budjet >= totalPrise)
            {
                let totalbudjet = budjet - totalPrise;
                console.log(`You have ${totalbudjet.toFixed(2)} leva left!`);
            }
            else
            {
                let needmoney = totalPrise - budjet;
                console.log(`Not enough money! You need ${needmoney.toFixed(2)} leva more!`);
            }
}