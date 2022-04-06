function swimmingRecord(input){
            let record = Number(input[0]);
            let distance =  Number(input[1]);
            let time =  Number(input[2]);
            let timeIvan = distance * time;
            let delay = Math.floor ( distance / 15);
            let delayIvan = delay * 12.5;
            let totalTimeIvan = timeIvan + delayIvan;
            
            if (record <= totalTimeIvan)
            {
                let difference = totalTimeIvan - record;
                console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
            }
            else 
            {
                
                console.log(`Yes, he succeeded! The new world record is ${totalTimeIvan.toFixed(2)} seconds.`);

            }
        }