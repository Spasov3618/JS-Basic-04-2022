function hotel(input){
    const  maiOktoberPriceStudio = 50;
            const  maiOktoberPriceApartment = 65;
            const  juneSeptemberPriceStudio = 75.20;
            const  juneSeptemberPriceApartment = 68.70;
            const  julayAugustPriceApartment = 77;
            const  julayAugustPriceStudio = 76;

            let mesec = input[0];
            let nomberDay = Number(input[1]);
            let priseStudio = 0;
            let priseApartment = 0;
            //•	За студио, при повече от 7 нощувки през май и октомври: 5 % намаление.
            //•	За студио, при повече от 14 нощувки през май и октомври: 30 % намаление.
            //•	За студио, при повече от 14 нощувки през юни и септември: 20 % намаление.
            //•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10 % намаление.
            switch (mesec)
            {
                case "May":
                case "October":
                    priseStudio = maiOktoberPriceStudio * nomberDay;
                    priseApartment = maiOktoberPriceApartment * nomberDay;
                    if (nomberDay > 7 && nomberDay < 14)
                    {
                        priseStudio -= priseStudio * 0.05;
                    }
                    else if (nomberDay > 14)
                    {
                        priseStudio -= priseStudio * 0.3;
                    }

                    break;
                case "June":
                case "September":
                    priseStudio = nomberDay * juneSeptemberPriceStudio;
                    priseApartment = juneSeptemberPriceApartment * nomberDay;
                    if (nomberDay > 14)
                    {
                        priseStudio -= priseStudio * 0.2;
                    }
                    break;
                case "July":
                case "August":
                    priseApartment = julayAugustPriceApartment  * nomberDay;
                    priseStudio = julayAugustPriceStudio  * nomberDay;
                    break;
            }
                    if (nomberDay > 14)
                    {
                     priseApartment -= priseApartment * 0.1;
                    }
            console.log(`Apartment: ${priseApartment.toFixed(2)} lv.` );
            console.log(`Studio: ${priseStudio.toFixed(2)} lv.`);
            
}