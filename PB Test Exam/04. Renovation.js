function renovation(input) {
    let index=0;
    let h = Number(input[index]);
    index++;
            let w = Number(input[index]);
            index++;
            let percentNoPaint = Number(input[index]);
            index++;
            let paint = (h * w) * 4;
            paint -= Math.ceil((paint * percentNoPaint) / 100);
            let boia = input[index];
            index++;
            while (boia != "Tired!")
            {
                let boianew = Number(boia);
                paint -= boianew;
                if (paint < 0)
                {
                    console.log(`All walls are painted and you have ${Math.abs(paint)} l paint left!`);
                    return;
                }
                if (paint === 0)
                {
                    console.log("All walls are painted! Great job, Pesho!");
                    return;
                }

                boia = input[index];
                index++;
            }
        
            console.log(`${paint} quadratic m left.`);
}