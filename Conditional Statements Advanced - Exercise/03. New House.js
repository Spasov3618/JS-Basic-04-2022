function hous(input){
    const  roza = 5;
            const  Dalia = 3.80;
            const  Lili = 2.80;
            const  Narcis = 3;
            const  Gladiola = 2.50;
            let flouers = input[0];
            let nomber = Number(input[1]);
            let budjet = Number(input[2]);
            //•	Ако Нели купи повече от 80 Рози - 10 % отстъпка от крайната цена
            //•	Ако Нели купи повече от 90  Далии - 15 % отстъпка от крайната цена
            //•	Ако Нели купи повече от 80 Лалета - 15 % отстъпка от крайната цена
            //•	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15 %
            //•	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20 %
            let moneu = 0;
            switch (flouers)
            {
                case "Roses":
                    {
                        if (nomber > 80)
                            moneu -= roza * nomber * 0.1;
                    }
                        moneu += nomber * roza;
                    break;
                       
                    
                case "Dahlias":
                    {
                if (nomber > 90)
                    moneu -= Dalia * nomber * 0.15;
                    } 
                            moneu += Dalia * nomber ;
                break;
                    
                case "Tulips":
                    {
                        if (nomber > 80)
                            moneu -= Lili * nomber * 0.15;
                    }
                            moneu += Lili * nomber;
                        break;
                    
                case "Narcissus":
                    {
                        if (nomber < 120)
                            moneu += Narcis * nomber * 0.15;
                    }
                            moneu += Narcis * nomber;
                        break;
                    
                case "Gladiolus":
                    {
                        if (nomber < 80)

                            moneu += Gladiola * nomber * 0.20;
                        
                            moneu += Gladiola * nomber;
                        break;
                    }
            }
            if (moneu <= budjet)
            {
                let leftMoneu = budjet - moneu;


                console.log(`Hey, you have a great garden with ${nomber} ${flouers} and ${leftMoneu.toFixed(2)} leva left.`);
            }
            else
            {
                let monneNeed = moneu - budjet;
                console.log( `Not enough money, you need ${monneNeed.toFixed(2)} leva more.`);
            }
           
}