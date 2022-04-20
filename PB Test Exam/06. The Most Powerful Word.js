function theMost(input) {
             let index = 0;
            let word = input[index];
            index++;
            let bestWord = 0;
            let best = "";
            while (word != "End of words")
            {
                let sumWord = 0;
                for (let i = 0; i < word.length; i++)
                {
                    let sum = (word.charCodeAt(i));
                    sumWord += sum;
                }

                let start = word[0];
                if (start === 'a' || start === 'e' || start === 'i' || start === 'o' || start === 'u' || start === 'y'|| start==='A'|| start==='E'|| start==='I'||start==='O'||start ==='U'||start==='Y')
                {
                    sumWord *= word.length;
                }
                else
                {
                    Math.floor(sumWord /= word.length);
                }

                if (bestWord <= sumWord)
                {
                    bestWord = sumWord;
                    best = word;
                }
            
                word = input[index];
                index++
            }
            if (word === "End of words"){

                console.log(`The most powerful word is ${best} - ${bestWord}`);
            }
        }
       