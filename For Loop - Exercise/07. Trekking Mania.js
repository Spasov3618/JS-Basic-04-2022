function trekking(input) {
    let index = 0;
    let group = Number(input[index]);
    index++;
            let p1 = 0;
            let p2 = 0;
            let p3 = 0;
            let p4 = 0;
            let p5 = 0;
            let num = 0;
            for (let i = 0; i < group; i++)
            {
                let numOfGrup = Number(input[index]);
                index++;

                if (numOfGrup < 6)
                {
                    p1 += numOfGrup;
                }
                else if (numOfGrup < 13)
                {
                    p2 += numOfGrup;
                }
                else if (numOfGrup < 26)
                {
                    p3 += numOfGrup;
                }
                else if (numOfGrup < 41)
                {
                    p4 += numOfGrup;
                }
                else
                {
                    p5 += numOfGrup;
                }
            }
                num = p1 + p2 + p3 + p4 + p5;
            
                let percentP1 =  (p1 /num)   * 100;
                let percentP2 =  (p2 / num)   * 100;
                let percentP3 =  (p3 / num)   * 100;
                let percentP4 =  (p4 / num)   * 100;
                let percentP5 =  (p5 / num)   * 100;
               console.log(`${percentP1.toFixed(2)}%`);
               console.log(`${percentP2.toFixed(2)}%`);
               console.log(`${percentP3.toFixed(2)}%`);
               console.log(`${percentP4.toFixed(2)}%`);
               console.log(`${percentP5.toFixed(2)}%`);
}
